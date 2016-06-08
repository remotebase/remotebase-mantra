import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Counts} from 'meteor/tmeasday:publish-counts';

export default function () {
  Meteor.publish('companies', function (query, limit) {
    check(query, Object);
    check(limit, Match.Optional(Number));

    query['hidden'] = {$ne: true};

    let option = {sort: {official: -1, name: 1}};

    if (limit) {
      option.limit = limit;
    }

    Counts.publish(this, 'companies-counter', Companies.find(query), {noReady: true});
    return Companies.find(query, option);
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
