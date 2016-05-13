import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Companies = new Mongo.Collection('companies');

// let schema = new SimpleSchema({
//
// });
//
// Companies.attachSchema(schema);

export default Companies;
