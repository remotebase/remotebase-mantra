export default {
  companyLogin({Meteor, FlowRouter}, username, password, done) {
    Meteor.loginWithPassword(username, password, done);
  },

  redirect({FlowRouter}, routeName) {
    FlowRouter.go(routeName);
  },

  logout({Meteor}) {
    Meteor.logout();
  },

  changePassword({Meteor, Accounts}, currentPassword, newPassword, done) {
    Accounts.changePassword(currentPassword, newPassword, done);
  }
};
