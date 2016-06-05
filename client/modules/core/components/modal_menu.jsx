import React from 'react';
import classnames from 'classnames';

import {pathFor} from '/client/modules/core/libs/helpers';

const ModalMenu = ({company, currentTab, handleTabChange, recordClick}) => {
  function onTabChange(newTab) {
    handleTabChange(newTab);
    if (newTab === 'jobs') {
      recordClick('companyModal-job', {companyName: company.name});
    }
  }

  return (
    <div className="menu-bar">
      <ul className="list-unstyled menu-list">
        <li className="menu-item">
          <div onClick={onTabChange.bind(this, 'overview')}
            className={classnames('menu-link', {active: currentTab === 'overview'})}>
            Overview
          </div>
        </li>
        <li className="menu-item">
          <div onClick={onTabChange.bind(this, 'work')}
            className={classnames('menu-link', {active: currentTab === 'work'})}>
            Work
          </div>
        </li>
        <li className="menu-item">
          <div onClick={onTabChange.bind(this, 'tech')}
            className={classnames('menu-link', {active: currentTab === 'tech'})}>
            Technology
          </div>
        </li>
        <li className="menu-item">
          <div onClick={onTabChange.bind(this, 'jobs')}
            className={classnames('menu-link', {active: currentTab === 'jobs'})}>
            Jobs
          </div>
        </li>
        <li className="menu-item">
          <a className="typeform-share link menu-link"
            href="https://mike706.typeform.com/to/zEPKEa" data-mode="1" target="_blank">Edit</a>
        </li>
      </ul>
    </div>
  );
};

export default ModalMenu;
