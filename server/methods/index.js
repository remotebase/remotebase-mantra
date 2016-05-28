import companies from './companies';
import debug from './debug';
import analytics from './analytics';
import users from './users';

export default function () {
  companies();
  debug();
  analytics();
  users();
}
