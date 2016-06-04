import _ from 'lodash';

/**
 * Turns an object with boolean values to an array whose elements are keys of
 * the object whose values are true.
 * e.g. {Slack: true, HipChat: false, Email: true} becomes ['Slack', 'Email']
 */
export function booleanObjToArray(obj) {
  let selected = [];

  _.forOwn(obj, (isSelected, filterName) => {
    if (isSelected) {
      selected.push(filterName);
    }
  });

  return selected;
}

/**
 * Translates a filter selection into a MongoDB query object
 */
export function filterToQuery(filterSelection) {
  // keys in filterSelection that are not actually a property in mongo document
  const non_properties = [ 'has_retreats', 'bootstrapped', 'is_standalone' ];
  console.log(filterSelection);

  let query = {};

  _.forOwn(filterSelection, function (val, key) {
    // First, go through actual properties that are set to true, and set query
    if (val === true && !_.includes(non_properties, key)) {
      query[key] = true;
    }

    if (key === 'name' && val) {
      query['name'] = {$regex: val, $options: 'i'};
    }

    if (key === 'has_retreats' && val === true) {
      query['num_retreats_per_year'] = {$gte: 1};
    }

    if (key === 'communication_methods') {
      let selected = booleanObjToArray(filterSelection[key]);

      if (selected.length > 0) {
        query['communication_methods'] = {$in: selected};
      }
    }

    if (key === 'collaboration_methods') {
      let selected = booleanObjToArray(filterSelection[key]);

      if (selected.length > 0) {
        query['collaboration_methods'] = {$in: selected};
      }
    }

    if (key === 'technologies') {
      let selected = booleanObjToArray(filterSelection[key]);

      if (selected.length > 0) {
        query['technologies'] = {$in: selected};
      }
    }

    if (key === 'bootstrapped' && val === true) {
      query['vc_funded'] = false;
    }

    if (key === 'is_standalone' && val === true) {
      query['is_agency'] = false;
    }

    if (key === 'hiring_region') {
      if (val !== 'Worldwide') { // Worldwide is the default value
        query['region'] = val;
      }
    }

    _.forOwn(filterSelection.team_size, (isSelected, teamSizeFilterName) => {
      switch (teamSizeFilterName) {
        case 'lt10':
          if (isSelected) {
            query['team_size'] = {$lt: 10};
          }
          break;
        case 'gte10lte25':
          if (isSelected) {
            query['team_size'] = {$gte: 10, $lte: 25};
          }
          break;
        case 'gte25lte50':
          if (isSelected) {
            query['team_size'] = {$gte: 25, $lte: 50};
          }
          break;
        case 'gt50':
          if (isSelected) {
            query['team_size'] = {$gt: 50};
          }
          break;
      }
    });
  });

  return query;
}
