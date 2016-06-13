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

  return (
    <div className="header-menu">
      <a href="https://mike706.typeform.com/to/o6eSiQ"
        className="menu-item typeform-share link"
        data-mode="1"
        target="_blank">
        Add company
      </a>
      {
        currentUser ?
        <span>
          <a href={pathFor('mySubscriptions')}
            className="menu-item">
            My subscriptions
          </a>
          <a href="#"
            className="menu-item"
            onClick={handleLogout}>
            Logout
          </a>
        </span> :
        <a className="menu-item"
          href="#"
          onClick={handleTwitterLogin}>
          <i className="fa fa-twitter"></i>
          Login
        </a>
      }
    </div>
  );
};

export default HeaderMenu;
