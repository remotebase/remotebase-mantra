import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Header from '../components/header.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  loginWithTwitter: actions.users.loginWithTwitter
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
