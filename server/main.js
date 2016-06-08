import publications from './publications';
import methods from './methods';
import {generateUsers, populateSeed, populateFilters} from './configs/seed';
import {configureSitemap, configureDebugRoutes} from './configs/routes';
import {configureOauth} from './configs/oauth';

publications();
methods();
configureSitemap();
configureOauth();

configureDebugRoutes();

// Generate data
populateFilters();

if (process.env.NODE_ENV !== 'production') {
  populateSeed();
}
