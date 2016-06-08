export default {
  companyLogin({Meteor, FlowRouter}, username, password, done) {
    Meteor.loginWithPassword(username, password, done);
  },

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

  logout({Meteor}) {
    Meteor.logout();
  },

  changePassword({Meteor, Accounts}, currentPassword, newPassword, done) {
    Accounts.changePassword(currentPassword, newPassword, done);
  }
};
