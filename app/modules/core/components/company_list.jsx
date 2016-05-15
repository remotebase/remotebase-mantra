import React from 'react';
import CompanyItem from '../containers/company_item';

const CompanyList = ({companies}) => (
  <ul className="list-unstyled">
    {
      companies.map(company => {
        return <CompanyItem company={company}
          key={company._id} />;
      })
    }
  </ul>
);

export default CompanyList;
