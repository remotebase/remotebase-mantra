import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EmailItem from '../components/email_item.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  sendVerificationEmail: actions.users.sendVerificationEmail,
  removeEmail: actions.users.removeEmail
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EmailItem);
