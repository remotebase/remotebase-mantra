import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TabProfile from '../components/tab_profile.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  updateCompany: actions.companies.updateCompany
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TabProfile);
