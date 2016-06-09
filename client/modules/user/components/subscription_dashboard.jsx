import React from 'react';
import SubscriptionDashboardView from '../containers/subscription_dashboard_view';

const SubscriptionDashboard = ({user}) => {
  if (user) {
    return <SubscriptionDashboardView user={user} />;
  } else {
    return <span></span>;
  }
};

export default SubscriptionDashboard;
