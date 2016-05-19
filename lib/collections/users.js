import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

let schema = new SimpleSchema({
  username: {
    type: String,
    optional: true
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
  companyId: { // _id of the company this user is an admin of
    type: String,
    optional: true
  }
});

Meteor.users.attachSchema(schema);

export default Meteor.users;
