import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  companyLogin: actions.users.companyLogin,
  redirect: actions.users.redirect
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
