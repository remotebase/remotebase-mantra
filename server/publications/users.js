import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('currentUser', function () {
    return Meteor.users.find(this.userId, {
      fields: {
        companySlug: 1,
        subscribedCompanyIds: 1,
        services: 1,
        emails: 1
      }
    });
  });
}
