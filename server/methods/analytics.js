import {ClickCounts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'analytics.recordClick'(target) {
      check(target, String);

      ClickCounts.insert({
        target,
        createdAt: new Date()
      });
    }
  });
}
