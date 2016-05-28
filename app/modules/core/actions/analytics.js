export default {
  recordClick({Meteor}, target, meta) {
    Meteor.call('analytics.recordClick', target, meta);
  }
};
