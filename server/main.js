import publications from './publications';
import methods from './methods';
import {generateUsers, populateSeed} from './configs/seed';

publications();
methods();

if (process.env.NODE_ENV !== 'production') {
  generateUsers();
  populateSeed();
}
