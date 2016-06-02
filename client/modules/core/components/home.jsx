import React from 'react';

import CompanyModal from '../containers/company_modal';
import Finder from '../containers/finder';

const Home = ({companySlug, companyTab}) => (
  <div>
    <Finder />
    {
      companySlug ?
      <CompanyModal companySlug={companySlug} companyTab={companyTab} /> : <span></span>
    }
  </div>
);

export default Home;
