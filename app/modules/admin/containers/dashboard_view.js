import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DashboardView from '../components/dashboard_view.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    let companyId = user.companyId;

    if (Meteor.subscribe('companyById', companyId).ready()) {
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
)(DashboardView);
