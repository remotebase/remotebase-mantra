import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SignInDialogue from '../components/sign_in_dialogue.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  loginWithTwitter: actions.users.loginWithTwitter,
  subscribeToCompany: actions.users.subscribeToCompany
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignInDialogue);
