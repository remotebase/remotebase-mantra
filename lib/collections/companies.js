import {Mongo} from 'meteor/mongo';
import _ from 'lodash';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';

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
  },

  getDistrbituedPercent() {
    if (this.remote_worker_percentage) {
      return this.remote_worker_percentage;
    }

    let ratio = 100 * (this.team_size - this.non_remote_team_size) / this.team_size;
    return _.round(ratio);
  }
});

export default Companies;
