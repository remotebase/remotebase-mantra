import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const Header = () => (
  <nav className="navbar navbar-light header">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <a className="brand" href={pathFor('home')}>
            <img src="/images/logo.png" className="header-logo" alt="logo"/>
            <h1 className="name">RemoteBase</h1>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
