import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Companies, Filters} from '/lib/collections';
import faker from 'faker';
import _ from 'lodash';

// Generate fixtures for local development
export function generateFixtures() {
  if (Companies.find().count() === 0) {
    console.log('Generating companies...');

    for (var i = 0; i < 50; i++) {
      let companyName = _.capitalize(faker.lorem.word());

      Companies.insert({
        name: companyName,
        slug: _.snakeCase(companyName),
        is_hiring: _.sample([ true, false ]),
        headquarters: faker.address.city(),
        description: faker.lorem.sentence(),
        website: faker.internet.url(),
        founded_year: 2000,
        vc_funded: _.sample([ true, false ]),
        team_size: _.random(2, 50),
        fully_distributed: _.sample([ true, false ]),
        num_retreats_per_year: _.random(0, 2),
        location_based_salary: _.sample([ true, false ]),
        funded_vacation: _.sample([ true, false ]),
        is_agency: _.sample([ true, false ]),
        offers_equity: _.sample([ true, false ]),
        family_leave: _.random(0, 3),
        healthcare: _.sample([ true, false ]),
        unlimited_vacation: _.sample([ true, false ]),
        salary_lower_bound: _.random(30000, 40000),
        salary_upper_bound: _.random(80000, 240000),
        asynchronous_collaboration: _.sample([ true, false ]),
        workweek: _.random(20, 60)
      });
    }

    console.log('Done generating companies');
  }
}

export function generateUsers() {
  if (Meteor.users.find().count() === 0) {
    console.log('Generating user');
    let userId1 = Accounts.createUser({
      username: 'tortuga-backpacks',
      password: '75c26068'
    });
    Meteor.users.update(userId1, {$set: {companySlug: 'tortuga-backpacks'}});

    let userId2 = Accounts.createUser({
      username: 'ghost',
      password: '7da5d551'
    });
    Meteor.users.update(userId2, {$set: {companySlug: 'ghost'}});

    let userId3 = Accounts.createUser({
      username: 'okgrow',
      password: '4850d6f9'
    });
    Meteor.users.update(userId3, {$set: {companySlug: 'ok-grow'}});

    let userId4 = Accounts.createUser({
      username: 'bithive_tech',
      password: 'c8d1ee76'
    });
    Meteor.users.update(userId4, {$set: {companySlug: 'bithive-tech'}});

    console.log('Done generating user');
  }
}

export function populateSeed() {
  if (Companies.find().count() === 0) {
    console.log('Populating company seed');
    let companies = JSON.parse(Assets.getText('seed.json'));
    companies.forEach(company => {
      Companies.insert(company);
    });
    console.log('Done populating company seed');
  }
}

export function populateFilters() {
  if (Filters.find().count() === 0) {
    console.log('Populating filters');
    Filters.remove({});

    let technologies = [
      'JavaScript',
      'Ruby',
      'HTML',
      'CSS',
      'Android',
      'Ruby on Rails',
      'Java',
      'PHP',
      'MySQL',
      'Python',
      'iOS',
      'AngularJS',
      'Node.js',
      'Scala',
      'MongoDB',
      'PostgreSQL',
      'C',
      'C++',
      'MeteorJS',
      'EnberJS',
      'Backbone.js',
      'Apache',
      'ReactJS',
      'Swift',
      'Golang',
      'Clojure',
      'Haskell',
      'AWS',
      'nginx',
      'Django',
      'Groovy'
    ];

    let communication_methods = [
      'Slack',
      'HipChat',
      'Email',
      'Skype',
      'FlowDock'
    ];

    let collaboration_methods = [
      'Google Apps',
      'Pivotal Tracker',
      'Desk.com',
      'Blossom',
      'DropBox',
      'Google Drive',
      'Trello',
      'Taiga',
      'Jira'
    ];

    technologies.forEach(tech => {
      Filters.insert({
        type: 'technology',
        value: tech
      });
    });

    communication_methods.forEach(comm_method => {
      Filters.insert({
        type: 'communication_method',
        value: comm_method
      });
    });

    collaboration_methods.forEach(collab_method => {
      Filters.insert({
        type: 'collaboration_method',
        value: collab_method
      });
    });

    console.log('Done populating filters');
  }
}
