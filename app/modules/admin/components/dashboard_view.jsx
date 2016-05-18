import React from 'react';

import DashboardMenu from '../containers/dashboard_menu';
import ProfileTab from '../containers/tab_profile';
import JobsTab from '../containers/tab_jobs';

const DashboardView = ({company, section}) => (
  <div className="row">
    <div className="col-xs-12 col-sm-3">
      <DashboardMenu section={section} />
    </div>
    <div className="col-xs-12 col-sm-9">
      <ProfileTab company={company} isActive={!section} />
      <JobsTab isActive={section === 'jobs'} />
    </div>
  </div>
);

export default DashboardView;
