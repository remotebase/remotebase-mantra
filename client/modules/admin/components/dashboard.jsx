import React from 'react';

import {EnsureLoggedIn} from 'meteor-auth';
import DashboardView from '../containers/dashboard_view';
import Login from '../containers/login';

const Dashboard = ({section}) => (
  <div>
    <EnsureLoggedIn unauthenticatedMessage={NotLoggedInMessage}>
      <DashboardView section={section} />
    </EnsureLoggedIn>
  </div>
);

const NotLoggedInMessage = (
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
