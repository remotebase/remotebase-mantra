import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchResult from '../components/search_result.jsx';
import Loading from '../containers/loading';

export const composer = ({context, query, limit}, onData) => {
  const {Meteor, Collections} = context();
  let isSearching;

  function passData() {
    let companies = Collections.Companies.find({}, {sort: {official: -1, name: 1}}).fetch();

    // transform manually to use helpers in SSR
    // https://github.com/dburles/meteor-collection-helpers/issues/60
    companies = companies.map(company => {
      return Collections.Companies._transform(company);
    });

    onData(null, {companies, isSearching, loadMore});
  }

  function loadMore() {
    isSearching = true;
    passData();
  }

  if (Meteor.subscribe('companies', query, limit).ready()) {
    isSearching = false;
    passData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loading),
  useDeps(depsMapper)
)(SearchResult);
