import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Header from '../components/header.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let currentUser = Meteor.user();
    onData(null, {currentUser});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  loginWithTwitter: actions.users.loginWithTwitter,
  logout: actions.users.logout
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
