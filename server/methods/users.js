import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Companies} from '/lib/collections'

export default function () {
  Meteor.methods({
    'users.subscribeToCompany'(companyId) {
      check(companyId, String);

      let userId = this.userId;
      Meteor.users.update(userId, {$addToSet: {subscribedCompanyIds: companyId}});
    },

    'users.unsubscribeFromCompany'(companyId) {
      check(companyId, String);

      let userId = this.userId;
      Meteor.users.update(userId, {$pull: {subscribedCompanyIds: companyId}});
    }
  });
}
