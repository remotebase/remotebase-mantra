import React from 'react';

import DashboardMenu from '../containers/dashboard_menu';
import ProfileTab from '../containers/tab_profile';
import JobsTab from '../containers/tab_jobs';
import SettingsTab from '../containers/tab_settings';
import OverviewTab from '../containers/tab_overview';

const DashboardView = ({company, section, user}) => {
  if (!user) {
    return <span></span>;
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-3">
        <DashboardMenu section={section}
          company={company} />
      </div>
      <div className="col-xs-12 col-sm-9">
        <OverviewTab isActive={!section} company={company} />
        <ProfileTab company={company} isActive={section === 'profile'} />
        <JobsTab isActive={section === 'jobs'} company={company} />
        <SettingsTab isActive={section === 'settings'} />
      </div>
    </div>
  );
};

export default DashboardView;
