import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';
import SubscriptionDashboard from '/client/modules/user/containers/subscription_dashboard';

export default function (injectDeps, {FlowRouter, _, DocHead, Meteor, Case}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      let title = 'RemoteBase - An Open Database of Remote Companies and Jobs';
      let description = 'RemoteBase is a collection of 190+ remote companies and their profiles. See how these companies work and who\'s hiring.';
      DocHead.removeDocHeadAddedTags();
      DocHead.setTitle(title);
      DocHead.addMeta({name: 'description', content: description});
      DocHead.addMeta({name: 'twitter:card', content: 'summary'});
      DocHead.addMeta({name: 'twitter:site', content: '@remotebase'});
      DocHead.addMeta({name: 'twitter:title', content: title});
      DocHead.addMeta({name: 'twitter:description', content: description});
      DocHead.addMeta({name: 'twitter:image', content: Meteor.absoluteUrl('images/logo.png')});
      DocHead.addMeta({property: 'og:title', content: 'Best Remote Companies and Remote Jobs'});
      DocHead.addMeta({property: 'og:site_name', content: 'RemoteBase'});
      DocHead.addMeta({property: 'og:image', content: Meteor.absoluteUrl('images/logo-680x680.png')});
      DocHead.addMeta({property: 'og:description', content: description});

      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/my-subscriptions', {
    name: 'mySubscriptions',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SubscriptionDashboard />)
      });
    }
  });

  FlowRouter.route('/:companySlug', {
    name: 'company',
    action({companySlug}) {
      mount(MainLayoutCtx, {
        content: () => (<Home companySlug={companySlug} />)
      });
    }
  });
}
