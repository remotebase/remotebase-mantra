import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DashboardView from '../components/dashboard_view.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    let companySlug = user.companySlug;
    console.log('logged in:', user);

    if (Meteor.subscribe('company', companySlug).ready()) {
      let company = Collections.Companies.findOne({slug: companySlug});

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
