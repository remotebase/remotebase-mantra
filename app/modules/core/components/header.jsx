import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light header">
    <div className="container">
      <div className="navbar-brand-container">
        <a className="navbar-brand" href="/">
          <img src="images/logo.png" className="logo" alt="logo"/>
          <span className="name">RemoteBase</span>
        </a>
      </div>
      <ul className="nav navbar-nav hidden-sm-down">
        <li className="nav-item">
          <a className="nav-link typeform-share" href="https://mike706.typeform.com/to/o6eSiQ" data-mode="1" target="_blank">Add company</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
