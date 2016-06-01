import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ModalTechnology from '../components/modal_technology.jsx';

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
)(ModalTechnology);
