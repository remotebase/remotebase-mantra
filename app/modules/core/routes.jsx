import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';

export default function (injectDeps, {FlowRouter, _, DocHead, Meteor, Case}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      let title = 'RemoteBase - Best Remote Companies and Remote Jobs';
      let description = 'RemoteBase is a collection of the best remote companies and remote jobs around the world. Live and work from anywhere.';
      DocHead.removeDocHeadAddedTags();
      DocHead.setTitle(title);
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

  FlowRouter.route('/:companySlug', {
    name: 'company',
    action({companySlug}, {tab}) {
      let companyName = Case.title(companySlug);
      let title = `RemoteBase - ${companyName} for remote jobs`;
      DocHead.removeDocHeadAddedTags();
      DocHead.setTitle(title);
      DocHead.addMeta({name: 'twitter:card', content: 'summary'});
      DocHead.addMeta({name: 'twitter:site', content: '@remotebase'});
      DocHead.addMeta({name: 'twitter:title', content: `${companyName} - RemoteBase`});
      DocHead.addMeta({name: 'twitter:description', content: `How is ${companyName} for a remote job?`});

      mount(MainLayoutCtx, {
        content: () => (<Home companySlug={companySlug} companyTab={tab} />)
      });
    }
  });
}
