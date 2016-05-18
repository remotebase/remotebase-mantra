import React from 'react';

import EnsureLoggedIn from '../containers/ensure_logged_in';
import DashboardMenu from '../containers/dashboard_menu';
import ProfileTab from '../containers/tab_profile';
import JobsTab from '../containers/tab_jobs';

const Dashboard = ({company, section}) => (
  <div>
    <EnsureLoggedIn>
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <DashboardMenu section={section} />
        </div>
        <div className="col-xs-12 col-sm-9">
          <ProfileTab company={company} isActive={!section} />
          <JobsTab isActive={section === 'jobs'} />
        </div>
      </div>
    </EnsureLoggedIn>
  </div>
);

export default Dashboard;
