import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Home from '../components/home.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('companies').ready()) {
    let companies = Collections.Companies.find({}, {sort: {name: 1}}).fetch();

    // transform manually to use helpers in SSR
    // https://github.com/dburles/meteor-collection-helpers/issues/60
    companies = companies.map(company => {
      return Collections.Companies._transform(company);
    });

    onData(null, {companies});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
