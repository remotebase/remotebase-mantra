import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import LoadMoreButton from '../components/load_more_button.jsx';

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
)(LoadMoreButton);
