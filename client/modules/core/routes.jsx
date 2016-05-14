import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';

export default function (injectDeps, {FlowRouter, _, DocHead}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      let title = 'RemoteBase - Best Companies for Remote Jobs';
      DocHead.setTitle(title);

      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/:companySlug', {
    name: 'company',
    action({companySlug}, {tab}) {
      let title = `RemoteBase - ${_.capitalize(companySlug)} for remote jobs`;
      DocHead.setTitle(title);

      mount(MainLayoutCtx, {
        content: () => (<Home companySlug={companySlug} companyTab={tab} />)
      });
    }
  });
}
