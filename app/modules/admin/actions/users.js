export default {
  companyLogin({Meteor, FlowRouter}, username, password, done) {
    Meteor.loginWithPassword(username, password, done);
  },

  redirect({FlowRouter}, routeName) {
    FlowRouter.go(routeName);
  }
};
