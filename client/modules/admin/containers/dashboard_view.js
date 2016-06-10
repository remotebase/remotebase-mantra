import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DashboardView from '../components/dashboard_view.jsx';

export const composer = ({context, user}, onData) => {
  const {Meteor, Collections} = context();
  let companySlug = user.companySlug;

  if (Meteor.subscribe('company', companySlug).ready()) {
    let company = Collections.Companies.findOne({slug: companySlug});

    onData(null, {user, company});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DashboardView);
