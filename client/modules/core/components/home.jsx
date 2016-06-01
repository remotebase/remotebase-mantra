import React from 'react';

import CompanyModal from '../containers/company_modal';
import Finder from '../containers/finder';
import MailchimpSignup from './mailchimp_signup.jsx';

const Home = ({companySlug, companyTab}) => (
  <div>
    {
      companySlug ?
      <CompanyModal companySlug={companySlug} companyTab={companyTab} /> : <span></span>
    }
    <MailchimpSignup />
    <Finder />
  </div>
);

export default Home;
