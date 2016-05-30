import {Mongo} from 'meteor/mongo';
import _ from 'lodash';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Companies = new Mongo.Collection('companies');

let schema = new SimpleSchema({
  name: {
    type: String
  },
  official: {
    type: Boolean
  },
  logo_url: {
    type: String
  },
  headquarters: {
    type: String
  },
  short_description: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  website: {
    type: String
  },
  job_page: {
    type: String
  },
  founded_year: {
    type: Number
  },
  vc_funded: {
    type: Boolean
  },
  team_size: {
    type: Number
  },
  fully_distributed: {
    type: Boolean
  },
  non_remote_team_size: {
    type: Number
  },
  is_hiring: {
    type: Boolean
  },
  asynchronous_collaboration: {
    type: Boolean
  },
  salary_lower_bound: {
    type: Number
  },
  salary_upper_bound: {
    type: Number
  },
  num_retreats_per_year: {
    type: Number
  },
  location_based_salary: {
    type: Boolean
  },
  funded_vacation: {
    type: Boolean
  },
  is_agency: {
    type: Boolean
  },
  offers_equity: {
    type: Boolean
  },
  family_leave: {
    type: Boolean
  },
  healthcare: {
    type: Boolean
  },
  note: {
    type: String
  },
  unlimited_vacation: {
    type: Boolean
  },
  sex_ratio: {
    type: String
  },
  slug: {
    type: String
  },
  communication_methods: {
    type: [ String ]
  },
  collaboration_methods: {
    type: [ String ]
  },
  technologies: {
    type: [ String ]
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
  },
  updatedAt: {
    type: Date,
    autoValue() {
      if (!this.isInsert) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Companies.attachSchema(schema);

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
  },

  getJobPage() {
    let url = this.job_page || this.website;
    return url + '?utm_source=remotebase.io';
  }
});

export default Companies;
