export default {
  // Admin stuff
  companyLogin({Meteor, FlowRouter}, username, password, done) {
    Meteor.loginWithPassword(username, password, done);
  },

  changePassword({Meteor, Accounts}, currentPassword, newPassword, done) {
    Accounts.changePassword(currentPassword, newPassword, done);
  },
  // Admin stuff ends

  loginWithTwitter({Meteor}) {
    Meteor.loginWithTwitter({}, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  },

  logout({Meteor}) {
    Meteor.logout();
  },

  redirect({FlowRouter}, routeName) {
    FlowRouter.go(routeName);
  },

  subscribeToCompany({Meteor}, companyId) {
    Meteor.call('users.subscribeToCompany', companyId);
  },

  unsubscribeFromCompany({Meteor}, companyId) {
    Meteor.call('users.unsubscribeFromCompany', companyId);
  }
};
