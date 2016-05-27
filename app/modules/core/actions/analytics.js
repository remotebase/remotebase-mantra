export default {
  recordClick({Meteor}, target) {
    Meteor.call('analytics.recordClick', target);
  }
};
