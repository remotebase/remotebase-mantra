import React from 'react';

import HeaderMenu from '../containers/header_menu';
import {pathFor} from '/client/modules/core/libs/helpers';

const Header = () => {

  return (
    <nav className="navbar navbar-light header">
      <div className="container header-content">
        <a className="brand" href={pathFor('home')}>
          <img src="/images/logo.png" className="header-logo" alt="logo"/>
          <h1 className="name">RemoteBase</h1>
        </a>

        <HeaderMenu />
      </div>
    </nav>
  );
};

export default Header;
