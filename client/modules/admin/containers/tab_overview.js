import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TabOverview from '../components/tab_overview.jsx';

export const composer = ({context, company}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TabOverview);
