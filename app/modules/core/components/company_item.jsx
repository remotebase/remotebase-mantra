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
  </li>
);

export default CompanyItem;
