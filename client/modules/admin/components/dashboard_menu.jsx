import React from 'react';
import classnames from 'classnames';

import {pathFor} from '/client/modules/core/libs/helpers';

const DashboardMenu = ({section, logout, recordClick, company}) => {
  function handleLogout(e) {
    e.preventDefault();

    logout();
  }

  function recordJobClick() {
    recordClick('jobs-tab', {companyName: company.name});
  }

  return (
    <div className="list-group">
      <a href={pathFor('admin_dashboard')}
        className={classnames('list-group-item', {active: !section})}>
        Overview
      </a>
      <a href={pathFor('admin_dashboard', {section: 'profile'})}
        className={classnames('list-group-item', {active: section === 'profile'})}>
        Profile
      </a>
      <a href={pathFor('admin_dashboard', {section: 'jobs'})}
        className={classnames('list-group-item', {active: section === 'jobs'})}
        onClick={recordJobClick}>
        Jobs
      </a>
      <a href={pathFor('admin_dashboard', {section: 'settings'})}
        className={classnames('list-group-item', {active: section === 'settings'})}>
        Account Settings
      </a>
      <a href="#"
        className="list-group-item"
        onClick={handleLogout}>
        Logout
      </a>
    </div>
  );
}

export default DashboardMenu;
