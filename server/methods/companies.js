import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'companies.updateCompany'(companyId, companyDoc) {
      check(companyId, String);
      check(companyDoc, Object);

      return Companies.update(companyId, {$set: companyDoc});
    }
  });
}
