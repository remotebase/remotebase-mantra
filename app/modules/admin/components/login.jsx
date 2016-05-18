import React from 'react';

const Login = () => (
  <div className="admin-login">
    <div className="row">
      <div className="col-xs-12">
        <img src="/images/cat-black.png" alt="cat-black" className="rb-cat"/>
        <h2>Company Login</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-4 col-sm-offset-4">
        <label htmlFor="account-name">Account Name</label>
        <input type="text" className="form-control" id="account-name" />

        <label htmlFor="account-password">Password</label>
        <input type="password" className="form-control" id="account-password" />

        <button className="btn btn-md btn-success btn-block login-btn">Login</button>
      </div>
    </div>
  </div>
);

export default Login;
