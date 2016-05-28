import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EmailChangeForm from '../components/email_change_form.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EmailChangeForm);
