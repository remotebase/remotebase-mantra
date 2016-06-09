import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Actions = new Mongo.Collection('actions');

let schema = new SimpleSchema({
  companyId: {
    type: String
  },
  type: {
    type: String
  },
  meta: {
    type: Object,
    blackbox: true,
    optional: true,
    defaultValue: {}
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  }
});

Actions.attachSchema(schema);

export default Actions;
