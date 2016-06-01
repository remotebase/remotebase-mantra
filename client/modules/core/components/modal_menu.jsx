import React from 'react';
import classnames from 'classnames';

import {pathFor} from '/client/modules/core/libs/helpers';

const ModalMenu = ({company, companyTab, recordClick}) => {
  function recordJobClick() {
    recordClick('companyModal-job', {companyName: company.name});
  }

  return (
    <div className="menu-bar">
      <ul className="list-unstyled menu-list">
        <li className="menu-item">
          <a href={pathFor('company', {companySlug: company.slug})}
            className={classnames({active: !companyTab})}>
            Overview
          </a>
        </li>
        <li className="menu-item">
          <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'work'}})}
            className={classnames({active: companyTab === 'work'})}>
            Work
          </a>
        </li>
        <li className="menu-item">
          <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'tech'}})}
            className={classnames({active: companyTab === 'tech'})}>
            Technology
          </a>
        </li>
        <li className="menu-item">
          <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'jobs'}})}
            className={classnames({active: companyTab === 'jobs'})}
            onClick={recordJobClick}>
            Jobs
          </a>
        </li>
        <li className="menu-item">
          <a className="typeform-share link"
            href="https://mike706.typeform.com/to/zEPKEa" data-mode="1" target="_blank">Edit</a>
        </li>
      </ul>
    </div>
  );
};

export default ModalMenu;
