import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/admin_layout.jsx';
import Login from './containers/login';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admin/login', {
    name: 'admin_login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
}
