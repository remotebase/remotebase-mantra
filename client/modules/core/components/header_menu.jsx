import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const HeaderMenu = ({currentUser, loginWithTwitter, logout}) => {
  function handleTwitterLogin(e) {
    e.preventDefault();

    loginWithTwitter();
  }

  function handleLogout(e) {
    e.preventDefault();

    logout();
  }

  if (currentUser) {
    return (
      <div className="header-menu">
        <a href={pathFor('mySubscriptions')}
          className="menu-item">
          My subscriptions
        </a>
        <a href="#"
          className="menu-item"
          onClick={handleLogout}>
          Logout
        </a>
      </div>
    )
  } else {
    return (
      <div className="header-menu">
        <a className="menu-item"
          href="#"
          onClick={handleTwitterLogin}>
          <i className="fa fa-twitter"></i>
          Login
        </a>
      </div>
    );
  }
};

export default HeaderMenu;
