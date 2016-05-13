import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CompanyModal from '../components/company_modal.jsx';

export const composer = ({context, companySlug}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('company', companySlug).ready()) {
    let company = Collections.Companies.findOne({slug: companySlug});
    onData(null, {company});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  navToHome: actions.companies.navToHome
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CompanyModal);
