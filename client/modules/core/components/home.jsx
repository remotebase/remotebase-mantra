import React from 'react';
import CompanyList from '../containers/company_list';

const Home = ({companies}) => (
  <div>
    <CompanyList companies={companies} />
  </div>
);

export default Home;
