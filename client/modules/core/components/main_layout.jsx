import React from 'react';

import Header from '../containers/header';
import Footer from '../containers/footer';

const Layout = ({content = () => null }) => (
  <div className="remotebase-layout">
    <Header />
    <main className="container">
      <div className="row">
        <div className="col-xs-12">
          {content()}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
