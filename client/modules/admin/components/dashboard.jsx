import React from 'react';

import EnsureLoggedIn from '../containers/ensure_logged_in';
import DashboardView from '../containers/dashboard_view';

const Dashboard = ({section}) => (
  <div>
    <EnsureLoggedIn>
      <DashboardView section={section} />
    </EnsureLoggedIn>
  </div>
);

export default Dashboard;
