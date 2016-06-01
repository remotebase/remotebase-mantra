import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorMessage: null};
  }

  handleLogin() {
    const {companyLogin, redirect} = this.props;

    let username = this.refs.accountName.value;
    let password = this.refs.accountPassword.value;

    companyLogin(username, password, (err) => {
      if (err) {
        this.setState({errorMessage: err.message});
        return;
      }

      redirect('admin_dashboard');
    });
  }

  render() {

    return (
      <div className="admin-login">
        <div className="row">
          <div className="col-xs-12">
            <img src="/images/cat-black.png" alt="cat-black" className="rb-cat"/>
            <h2>Company Login</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4">
            {
              this.state.errorMessage ?
              <div className="alert alert-warning">
                {this.state.errorMessage}
              </div> : <span></span>
            }

            <label htmlFor="account-name">Account Name</label>
            <input type="text" className="form-control" id="account-name" ref="accountName" />

            <label htmlFor="account-password">Password</label>
            <input type="password" className="form-control" id="account-password" ref="accountPassword" />

            <button className="btn btn-md btn-success btn-block login-btn"
              onClick={this.handleLogin.bind(this)}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
