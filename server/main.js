import publications from './publications';
import methods from './methods';
import {generateUsers, populateSeed, populateFilters} from './configs/seed';
import {configureSitemap} from './configs/routes';

publications();
methods();
configureSitemap();

// Generate data
populateFilters();

if (process.env.NODE_ENV !== 'production') {
  generateUsers();
  populateSeed();
}
