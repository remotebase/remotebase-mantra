import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('companies', function () {
    return Companies.find();
  });

  Meteor.publish('company', function (slug) {
    return Companies.find({slug});
  });
}
