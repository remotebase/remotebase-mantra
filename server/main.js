import publications from './publications';
import methods from './methods';
import {generateUsers, populateSeed} from './configs/seed';
import {configureSitemap} from './configs/routes';

publications();
methods();
configureSitemap();

if (process.env.NODE_ENV !== 'production') {
  generateUsers();
  populateSeed();
}
