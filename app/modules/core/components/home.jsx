import React from 'react';
import CompanyList from '../containers/company_list';
import CompanyModal from '../containers/company_modal';
import MailchimpSignup from './mailchimp_signup.jsx';

const Home = ({companies, companySlug, companyTab}) => (
  <div>
    <MailchimpSignup />
    <CompanyList companies={companies} />
    <CompanyModal companySlug={companySlug} companyTab={companyTab} />
  </div>
);

export default Home;
