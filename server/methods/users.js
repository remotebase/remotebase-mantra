import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {check} from 'meteor/check';
import {Companies} from '/lib/collections'

export default function () {
  Meteor.methods({
    'users.subscribeToCompany'(companyId) {
      check(companyId, String);

      let userId = this.userId;
      Meteor.users.update(userId, {$addToSet: {subscribedCompanyIds: companyId}});
      Companies.update(companyId, {$inc: {numSubscribers: 1}}); // increment numSubscribers
    },

    'users.unsubscribeFromCompany'(companyId) {
      check(companyId, String);

      let userId = this.userId;
      Meteor.users.update(userId, {$pull: {subscribedCompanyIds: companyId}});
      Companies.update(companyId, {$inc: {numSubscribers: -1}});
    },

    'users.addEmail'(email) {
      let userId = this.userId;
      Accounts.addEmail(userId, email);
      Accounts.sendVerificationEmail(userId, email);
    },

    'users.removeEmail'(email) {
      Accounts.removeEmail(this.userId, email);
    },

    'users.sendVerificationEmail'(email) {
      Accounts.sendVerificationEmail(this.userId, email);
    }
  });
}
