import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MockSubscribeButton from '../components/mock_feature_button.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  recordClick: actions.analytics.recordClick
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MockSubscribeButton);
