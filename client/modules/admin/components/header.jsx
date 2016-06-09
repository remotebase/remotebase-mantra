import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light header">
    <div className="container">
      <div className="navbar-brand-container">
        <a className="brand" href="/">
          <img src="/images/logo.png" className="header-logo" alt="logo"/>
          <span className="name">RemoteBase</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
