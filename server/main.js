import publications from './publications';
import methods from './methods';
import {generateFixtures} from './configs/seed';

publications();
methods();

if (process.env.NODE_ENV !== 'production') {
  generateFixtures();
}
