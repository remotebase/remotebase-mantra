import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import _ from 'lodash';

export default function () {
  Meteor.methods({
    'debug.import053016'() {
      let companies = JSON.parse(Assets.getText('addition-053016.json'));
      companies.forEach(company => {
        Companies.insert(company);
      });
      console.log('Done debug.import053016');
    },
    'debug.undo-import053016'() {
      let companies = JSON.parse(Assets.getText('addition-053016.json'));
      companies.forEach(company => {
        Companies.remove({name: company.name});
      });
      console.log('Done debug.undo-import053016');
    }
  });

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
