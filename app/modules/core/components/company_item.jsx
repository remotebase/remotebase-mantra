import React from 'react';

const CompanyItem = ({company, navToCompany}) => (
  <li className="company-item-container col-xs-12 col-sm-6" onClick={navToCompany.bind(this, company.slug)}>
    <div className="company-item">
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <img src={company.getLogoUrl()} alt="company" className="company-logo"/>
        </div>
        <div className="col-xs-12 col-sm-9">
          <h2 className="company-name">
            {company.name}
          </h2>
          <p>
            {company.description}
          </p>
        </div>
      </div>
    </div>
    <div className="hover-info-container container">
      <div className="hover-info">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <h2 className="company-name">
              {company.name}
            </h2>
            <div className="badges">
              <span className="rb-label">
                <i className="fa fa-flag"> </i>{company.founded_year}
              </span>
              <span className="rb-label">
                <i className="fa fa-users"> </i>{company.team_size}
              </span>
              {company.fully_distributed ? <span className="rb-label">Fully Distributed</span> : <span></span>}
            </div>
            <div className="salary-range">
              {company.salary_lower_bound} ~ {company.salary_upper_bound}
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default CompanyItem;
