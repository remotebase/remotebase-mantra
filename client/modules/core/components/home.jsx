import React from 'react';
import CompanyList from '../containers/company_list';
import CompanyModal from '../containers/company_modal';

const Home = ({companies, companySlug}) => (
  <div>
    <CompanyList companies={companies} />
    <CompanyModal companySlug={companySlug} />
  </div>
);

export default Home;
