import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CompanyItemCardView from '../components/company_item_card_view.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  navToCompany: actions.companies.navToCompany
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CompanyItemCardView);
