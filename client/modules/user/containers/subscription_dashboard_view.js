import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SubscriptionDashboardView from '../components/subscription_dashboard_view.jsx';

export const composer = ({context, user}, onData) => {
  const {Meteor, Collections} = context();

  let query = {_id: {$in: user.subscribedCompanyIds}};

  if (Meteor.subscribe('companies', query)) {
    let companies = Collections.Companies.find(query);
    onData(null, {user, companies});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  unsubscribeFromCompany: actions.users.unsubscribeFromCompany
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SubscriptionDashboardView);
