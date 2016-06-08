import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

let schema = new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  profile: {
    type: Object,
    blackbox: true,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  services: {
    type: Object,
    blackbox: true
  },
  companySlug: { // slug of the company this user is an admin of
    type: String,
    optional: true
  },
  subscribedCompanyIds: {
    type: [ String ],
    optional: true,
    defaultValue: []
  }
});

Meteor.users.attachSchema(schema);

export default Meteor.users;
