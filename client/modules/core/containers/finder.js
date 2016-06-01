import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Finder from '../components/finder.jsx';

export const composer = ({context}, onData) => {
  const {Counts} = context();
  let companyResultCount = Counts.get('companies-counter');

  onData(null, {companyResultCount});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Finder);
