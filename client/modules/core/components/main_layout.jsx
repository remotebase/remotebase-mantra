import React from 'react';

import Header from '../containers/header';
import Footer from '../containers/footer';
import TwitterFollowBtn from '../containers/twitter_follow_btn';

const Layout = ({content = () => null }) => (
  <div className="remotebase-layout">
    <Header />
    <main className="container">
      <div className="row">
        <div className="col-xs-12">
          {content()}
        </div>
      </div>
      <TwitterFollowBtn />
    </main>
    <Footer />
  </div>
);

export default Layout;
