import React from 'react';
import Header from './header.jsx';

const AdminLayout = ({content}) => (
  <div>
    <Header />
    <main className="container">
      <div className="row">
        <div className="col-xs-12">
          {content()}
        </div>
      </div>
    </main>
  </div>
);

export default AdminLayout;
