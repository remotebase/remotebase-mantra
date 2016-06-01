import publications from './publications';
import methods from './methods';
import {generateUsers, populateSeed, populateFilters,migrateData} from './configs/seed';
import {configureSitemap} from './configs/routes';

publications();
methods();
configureSitemap();

// Generate data
populateFilters();


migrateData();

if (process.env.NODE_ENV !== 'production') {
  populateSeed();
}
