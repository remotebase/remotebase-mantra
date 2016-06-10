import React from 'react';

import DashboardView from '../containers/dashboard_view';
import Login from '../containers/login';

const Dashboard = ({section, user}) => {
  if (!user) {
    return <NotLoggedInMessage />;
  }

  return <DashboardView section={section} user={user} />;
};

const NotLoggedInMessage = () => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="alert alert-warning">
          Please sign in to view this page.
        </div>
      </div>
    </div>
    <Login />
  </div>
);

export default Dashboard;
