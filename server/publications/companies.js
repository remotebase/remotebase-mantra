import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('companies', function (query) {
    console.log('query', query);
    return Companies.find(query);
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
