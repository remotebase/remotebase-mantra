import {Companies, Actions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'companies.updateCompany'(companyId, companyDoc) {
      check(companyId, String);
      check(companyDoc, Object);

      let company = Companies.findOne(companyId);
      if (!company.is_hiring && companyDoc.is_hiring) {
        Actions.insert({companyId, type: 'startHiring'});
      }

      return Companies.update(companyId, {$set: companyDoc});
    }
  });
}
