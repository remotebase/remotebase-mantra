import {ClickCounts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

export default function () {
  Meteor.methods({
    'analytics.recordClick'(target, meta = {}) {
      check(target, String);
      check(meta, Object);

      ClickCounts.insert({
        target,
        meta,
        createdAt: new Date()
      });
    }
  });
}
