export default {
  // Admin stuff
  companyLogin({Meteor, FlowRouter}, username, password, done) {
    Meteor.loginWithPassword(username, password, done);
  },

  changePassword({Meteor, Accounts}, currentPassword, newPassword, done) {
    Accounts.changePassword(currentPassword, newPassword, done);
  },
  // Admin stuff ends

  loginWithTwitter({Meteor}, done) {
    Meteor.loginWithTwitter({}, function (err) {
      if (done) {
        done(err);
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
  },

  addEmail({Meteor}, email) {
    Meteor.call('users.addEmail', email);
  },

  removeEmail({Meteor}, email) {
    Meteor.call('users.removeEmail', email);
  },

  sendVerificationEmail({Meteor}, email) {
    Meteor.call('users.sendVerificationEmail', email);
  },
};
