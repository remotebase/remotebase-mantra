import React from 'react';

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
          <span className="rb-label company-label distributed-ratio-label">
            <span className="hidden-sm-up">
              {company.getDistrbituedPercent()}% <i className="fa fa-globe"></i>
            </span>
            <span className="hidden-sm-down">
              {company.getDistrbituedPercent()}% distributed
            </span>
          </span>
          <span className="rb-label company-label employee-label">
            <span className="hidden-sm-up">
              {company.team_size} <i className="fa fa-users"></i>
            </span>
            <span className="hidden-sm-down">
              {company.team_size} people
            </span>
          </span>
          <span className="rb-label company-label hiring-label">
            {company.is_hiring ? 'Hiring' : 'Not hiring'}
          </span>
          <span className="rb-label company-label vc-label">
            {company.vc_funded ? 'VC backed' : 'Bootstrapped'}
          </span>
        </div>
      </div>
    </div>
  </li>
);

export default CompanyItem;
