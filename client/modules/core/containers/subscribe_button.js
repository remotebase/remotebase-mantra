import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SubscribeButton from '../components/subscribe_button.jsx';

export const composer = ({context, company}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    let subscribed = user.subscribedCompanyIds.indexOf(company._id) > -1;

    onData(null, {subscribed});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  subscribeToCompany: actions.users.subscribeToCompany,
  unsubscribeFromCompany: actions.users.unsubscribeFromCompany
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SubscribeButton);
