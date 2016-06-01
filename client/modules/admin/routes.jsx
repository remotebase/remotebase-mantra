import React from 'react';
import {mount} from 'react-mounter';

import AdminLayout from './components/admin_layout.jsx';
import Login from './containers/login';
import Dashboard from './containers/dashboard';

export default function (injectDeps, {FlowRouter, DocHead}) {
  const AdminLayoutCtx = injectDeps(AdminLayout);

  FlowRouter.route('/admin/login', {
    name: 'admin_login',
    action() {
      mount(AdminLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/admin/dashboard/:section?', {
    name: 'admin_dashboard',
    action({section}) {
      let title = 'RemoteBase - Admin dashboard';
      DocHead.removeDocHeadAddedTags();
      DocHead.setTitle(title);

      mount(AdminLayoutCtx, {
        content: () => (<Dashboard section={section} />)
      });
    }
  });
}
