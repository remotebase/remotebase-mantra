import React from 'react';

import HeaderMenu from '../containers/header_menu';
import {pathFor} from '/client/modules/core/libs/helpers';

const Header = () => {

  return (
    <nav className="navbar navbar-light header">
      <a className="brand" href={pathFor('home')}>
        <img src="/images/logo.png" className="header-logo" alt="remotebase"/>
        <h1 className="name">RemoteBase</h1>
      </a>
      <h2 className="header-desc">Open database of remote companies</h2>
    </nav>
  );
};

export default Header;
