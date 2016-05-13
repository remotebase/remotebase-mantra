import React from 'react';

import Header from '../containers/header';

const Layout = ({content = () => null }) => (
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

export default Layout;
