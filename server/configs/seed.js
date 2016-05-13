import {Companies} from '/lib/collections';
import faker from 'faker';
import _ from 'lodash';

// Generate fixtures for local development
export function generateFixtures() {
  if (Companies.find().count() === 0) {
    console.log('Generating companies...');

    for (var i = 0; i < 50; i++) {
      let companyName = faker.company.companyName();

      Companies.insert({
        name: companyName,
        slug: _.snakeCase(companyName),
        headquarters: faker.address.city(),
        description: faker.lorem.sentence(),
        website: faker.internet.url(),
        founded: 2000,
        vcFunded: _.sample([ true, false ]),
        teamSize: _.random(2, 50),
        fullyDistributed: _.sample([ true, false ]),
        numRetreatsPerYear: _.random(0, 2),
        locationBasedSalary: _.sample([ true, false ]),
        fundedVacation: _.sample([ true, false ]),
        agency: _.sample([ true, false ]),
        equity: _.sample([ true, false ]),
        familyLeave: _.random(0, 3),
        healthcare: _.sample([ true, false ]),
        unlimitedVacation: _.sample([ true, false ])
      });
    }

    console.log('Done generating companies');
  }
}
