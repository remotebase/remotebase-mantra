import _ from 'lodash';

/**
 * Translates a filter selection into a MongoDB query object
 */
export function filterToQuery(filterSelection) {
  // keys in filterSelection that are not actually a property in mongo document
  const non_properties = [ 'has_retreats' ];

  let query = {};

  _.forOwn(filterSelection, function (val, key) {
    if (val === true) {

      if (!_.includes(non_properties, key)) {
        query[key] = true;
      }
    }

    if (key === 'team_size') {
      switch (val) {
        case 'lt10':
          query['team_size'] = {$lt: 10};
          break;
        case 'tenToFifty':
          query['team_size'] = {$gt: 10, $lt: 50};
          break;
        case 'fiftyToHundred':
          query['team_size'] = {$gt: 50, $lt: 100};
          break;
        case 'gt100':
          query['team_size'] = {$gt: 100};
          break;
      }
    }

    if (key === 'has_retreats' && val === true) {
      query['num_retreats_per_year'] = {$gte: 1};
    }

    if (key === 'communication_methods' && val.length > 0) {
      query['communication_methods'] = {$in: val};
    }

    if (key === 'collaboration_methods' && val.length > 0) {
      query['collaboration_methods'] = {$in: val};
    }

  });

  return query;
}
