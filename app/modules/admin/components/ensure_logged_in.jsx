import React from 'react';

import Login from '../containers/login';

const EnsureLoggedIn = ({loggedIn, children}) => (
  <div>
    {loggedIn ? children : <NotLoggedInMessage />}
  </div>
);

const NotLoggedInMessage = () => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="alert alert-warning">
          Please log in to view this page.
        </div>
      </div>
    </div>
    <Login />
  </div>
);

export default EnsureLoggedIn;
