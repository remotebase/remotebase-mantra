import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PasswordChangeForm from '../components/password_change_form.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  changePassword: actions.users.changePassword
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PasswordChangeForm);
