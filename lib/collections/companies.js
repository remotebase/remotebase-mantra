import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import _ from 'lodash';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Companies = new Mongo.Collection('companies');

let schema = new SimpleSchema({
  name: {
    type: String
  },
  official: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  logo_url: {
    type: String
  },
  headquarters: {
    type: String,
    optional: true,
  },
  short_description: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  },
  website: {
    type: String
  },
  job_page: {
    type: String,
    optional: true
  },
  founded_year: {
    type: Number
  },
  vc_funded: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  team_size: {
    type: Number,
    optional: true
  },
  fully_distributed: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  non_remote_team_size: {
    type: Number
  },
  is_hiring: {
    type: Boolean
  },
  region: {
    type: [ String ],
    optional: true
  },
  asynchronous_collaboration: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  salary_lower_bound: {
    type: Number,
    optional: true
  },
  salary_upper_bound: {
    type: Number,
    optional: true
  },
  num_retreats_per_year: {
    type: Number
  },
  location_based_salary: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  funded_vacation: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  is_agency: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  offers_equity: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  family_leave: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  healthcare: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  note: {
    type: String,
    optional: true
  },
  unlimited_vacation: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  sex_ratio: {
    type: String,
    optional: true
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
  twitter: {
    type: String,
    optional: true
  },
  hidden: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  numSubscribers: {
    type: Number,
    optional: true,
    defaultValue: 0
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
  },

  getProfileUrl() {
    return Meteor.absoluteUrl(this.slug);
  }
});

export default Companies;
