import React from 'react';

const CompanyItem = ({company, navToCompany}) => (
  <li className="company-item" onClick={navToCompany.bind(this, company.slug)}>
    <div className="row">
      <div className="col-xs-12 col-sm-1">
        <img src={company.getLogoUrl()} alt="company" className="company-logo"/>
      </div>
      <div className="col-xs-12 col-sm-11">
        <h2 className="company-name">
          {company.name}
        </h2>
        <p>
          {company.description}
        </p>
      </div>
    </div>
  </li>
);

export default CompanyItem;
