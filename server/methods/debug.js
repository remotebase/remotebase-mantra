import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'debug.replaceCompanyData'() {
      Companies.remove({});
      let companies = JSON.parse(Assets.getText('seed.json'));
      companies.forEach(company => {
        Companies.insert(company);
      });
      console.log('Done debug.replaceCompanyData');
    }
  });
}
