import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const Header = ({loginWithTwitter}) => (
  <nav className="navbar navbar-light header">
    <div className="container header-content">
      <a className="brand" href={pathFor('home')}>
        <img src="/images/logo.png" className="header-logo" alt="logo"/>
        <h1 className="name">RemoteBase</h1>
      </a>
      <div className="header-menu">
        <button className="btn rb-btn-secondary"
          onClick={loginWithTwitter}>
          <i className="fa fa-twitter"></i>
          Login
        </button>
      </div>
    </div>
  </nav>
);

export default Header;
