import {Companies} from '/lib/collections';
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
