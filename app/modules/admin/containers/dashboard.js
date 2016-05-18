import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Dashboard from '../components/dashboard.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    let companyId = user.companyId;

    if (Meteor.subscribe('companyById', companyId)) {
      let company = Collections.Companies.findOne(companyId);

      onData(null, {company});
    }
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Dashboard);
