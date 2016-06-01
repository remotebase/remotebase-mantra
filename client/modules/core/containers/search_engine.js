import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchEngine from '../components/search_engine.jsx';

export const composer = ({context, query, limit}, onData) => {
  const {Meteor} = context();

  let cursor = Meteor.subscribe('companies', query, limit);
  onData(null, {isSearching: cursor.ready()});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SearchEngine);
