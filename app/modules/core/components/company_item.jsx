import React from 'react';

const CompanyItem = ({company, navToCompany}) => (
  <li className="col-xs-6 col-sm-4" onClick={navToCompany.bind(this, company.slug)}>
    <div className="company-item-container">
      <div className="company-item">
        <div className="row company-heading">
          <div className="col-xs-12 text-xs-center">
            <img src={company.getLogoUrl()} alt="company" className="company-logo"/>
          </div>
          <div className="col-xs-12 text-xs-center">
            <h2 className="company-name">
              {company.name}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-xs-center">
            <p className="short-desc">
              {company.short_description}
            </p>
          </div>
        </div>
      </div>

      <div className="hover-info-container">
        <div className="hover-info">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="company-name">
                {company.name}
              </h2>
              <ul className="list-unstyled summary-list">
                <li>
                  <i className="fa fa-flag fa-fw"></i> Founded: {company.founded_year}
                </li>
                <li>
                  <i className="fa fa-users fa-fw"></i> Team size: {company.team_size}
                </li>
                <li>
                  <i className="fa fa-globe fa-fw"></i> Fully Distributed: {company.fully_distributed ? 'YES' : 'NO'}
                </li>
              </ul>



              <div className="salary-range">
                {company.salary_lower_bound} ~ {company.salary_upper_bound}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default CompanyItem;
