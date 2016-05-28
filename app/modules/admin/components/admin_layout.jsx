import React from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';

const AdminLayout = ({content}) => (
  <div className="admin">
    <Header />
    <main className="container">
      <div className="row">
        <div className="col-xs-12">
          {content()}
        </div>
      </div>
    </main>
    <Welcome />
  </div>
);

export default AdminLayout;
