import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import HeaderMenu from '../components/header_menu.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});

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
)(HeaderMenu);
