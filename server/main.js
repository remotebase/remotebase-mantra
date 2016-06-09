import publications from './publications';
import methods from './methods';
import {generateUsers, populateSeed, populateFilters} from './configs/seed';
import {configureSitemap, configureDebugRoutes} from './configs/routes';
import {configureOauth} from './configs/oauth';
import {configureEmailTemplates} from './configs/users';


publications();
methods();
configureSitemap();
configureOauth();
configureEmailTemplates();

configureDebugRoutes();

// Generate data
populateFilters();

if (process.env.NODE_ENV !== 'production') {
  populateSeed();
}
