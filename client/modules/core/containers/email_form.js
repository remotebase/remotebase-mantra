import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EmailForm from '../components/email_form.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    onData(null, {user});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  addEmail: actions.users.addEmail
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EmailForm);
