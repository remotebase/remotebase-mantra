import React from 'react';
import classnames from 'classnames';

import OfficialIcon from './official_icon.jsx';

const CompanyItem = ({company, navToCompany}) => (
  <li className="col-xs-12"
    onClick={navToCompany.bind(this, company.slug)}>
    <div className="company-item-container">
      <div className="row company-item">
        <div className="col-xs-12 col-sm-4 company-item-section">
          <div className="company-meta">
            <img src={company.getLogoUrl()} alt="company" className="company-logo"/>
            <div className="company-name">
              {company.name}
              <OfficialIcon company={company} />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-8 company-item-section">
          <div className="distributed-ratio-label-container">
            <span className="company-label">
              <span className="hidden-sm-up">
                {company.getDistrbituedPercent()}% <i className="fa fa-globe"></i>
              </span>
              <span className="hidden-sm-down">
                {company.getDistrbituedPercent()}% distributed
              </span>
            </span>
          </div>
          <div className="team-size-label-container">
            <span className="company-label">
              <span className="hidden-sm-up">
                {company.team_size} <i className="fa fa-users"></i>
              </span>
              <span className="hidden-sm-down">
                {company.team_size} people
              </span>
            </span>
          </div>
          <div className="hiring-label-container">
            <span className={classnames('company-label', {'label-hiring': company.is_hiring, 'label-not-hiring': !company.is_hiring})}>
              {company.is_hiring ? 'Hiring' : 'Not hiring'}
            </span>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default CompanyItem;
