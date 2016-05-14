import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Companies = new Mongo.Collection('companies');

// let schema = new SimpleSchema({
//
// });
//
// Companies.attachSchema(schema);

Companies.helpers({
  getLogoUrl() {
    const default_url = '/images/company.png';
    return this.logo_url || default_url;
  }
});

export default Companies;
