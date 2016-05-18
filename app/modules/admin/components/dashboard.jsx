import React from 'react';

import EnsureLoggedIn from '../containers/ensure_logged_in';
import DashboardMenu from '../containers/dashboard_menu';
import ProfileTab from '../containers/tab_profile';

const Dashboard = ({company}) => (
  <div>
    <EnsureLoggedIn>
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <DashboardMenu />
        </div>
        <div className="col-xs-12 col-sm-9">
          <ProfileTab company={company} />
        </div>
      </div>
    </EnsureLoggedIn>
  </div>
);

export default Dashboard;
