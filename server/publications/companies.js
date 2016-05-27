import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Counts} from 'meteor/tmeasday:publish-counts';

export default function () {
  Meteor.publish('companies', function (query, limit = 10) {
    check(query, Object);
    check(limit, Number);

    query['hidden'] = {$ne: true};

    console.log('query', query);
    console.log('limit', limit);

    Counts.publish(this, 'companies-counter', Companies.find(query), {noReady: true});
    return Companies.find(query, {limit, sort: {official: -1, name: 1}});
  });

  Meteor.publish('company', function (slug) {
    check(slug, String);
    return Companies.find({slug});
  });

  Meteor.publish('companyById', function (companyId) {
    check(companyId, String);
    return Companies.find(companyId);
  });
}
