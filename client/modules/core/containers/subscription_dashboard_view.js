import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SubscriptionDashboardView from '../components/subscription_dashboard_view.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    let query = {_id: {$in: user.subscribedCompanyIds}};

    if (Meteor.subscribe('companies', query)) {
      let companies = Collections.Companies.find(query);
      onData(null, {user, companies});
    }
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
