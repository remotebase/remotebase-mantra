import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import _ from 'lodash';

export default function () {
  // Meteor.methods({
  //   'debug.replaceCompanyData'() {
  //     Companies.remove({});
  //     let companies = JSON.parse(Assets.getText('seed.json'));
  //     companies.forEach(company => {
  //       Companies.insert(company);
  //     });
  //     console.log('Done debug.replaceCompanyData');
  //   }
  // });

  Meteor.methods({
    'debug.getCounts'(column) { // technologies, collaboration_methods, communication_methods
      let companies = Companies.find().fetch();
      let counts = {};

      companies.forEach(company => {
        company[column].forEach(tech => {
          if (counts[tech]) {
            counts[tech]++;
          } else {
            counts[tech] = 1;
          }
        });
      });

      console.log(counts);
    }
  });
}
