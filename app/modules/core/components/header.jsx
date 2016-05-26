import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light header">
    <div className="container">
      <div className="navbar-brand-container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" className="logo" alt="logo"/>
          <div className="brand-wrapper">
            <div className="name">RemoteBase</div>
            <h1 className="tagline">Find the best remote companies</h1>
          </div>
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
