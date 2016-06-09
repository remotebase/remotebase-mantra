import React from 'react';
import {EnsureLoggedIn} from 'meteor-auth';
import SubscriptionDashboardView from '../containers/subscription_dashboard_view';

const SubscriptionDashboard = () => (
  <EnsureLoggedIn>
    <SubscriptionDashboardView />
  </EnsureLoggedIn>
);

export default SubscriptionDashboard;
