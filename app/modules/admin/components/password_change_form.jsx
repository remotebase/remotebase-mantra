import React from 'react';

import Alert from './alert.jsx';

class PasswordChangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const {changePassword} = this.props;
    let currentPassword = this.refs.currentPassword.value;
    let newPassword = this.refs.newPassword.value;
    let newPasswordConfirm = this.refs.newPasswordConfirm.value;

    if (newPassword !== newPasswordConfirm) {
      this.setState({message: {type: 'warning', value: 'Passwords do not match'}});
      return;
    }

    changePassword(currentPassword, newPassword, (err) => {
      if (err) {
        this.setState({message: {type: 'warning', value: err.message}});
        return;
      }

      this.setState({message: {type: 'success', value: 'Passwords have been changed.'}});
      this.refs.currentPassword.value = '';
      this.refs.newPassword.value = '';
      this.refs.newPasswordConfirm.value = '';
      setTimeout(() => {
        this.setState({message: null});
      }, 3000);
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Change password
        </div>
        <div className="card-block">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <Alert message={this.state.message} />
            </div>
            <div className="col-xs-12 col-sm-4">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                  Current password
                  <input type="password" className="form-control" ref="currentPassword" />
                </label>
                <label>
                  New password
                  <input type="password" className="form-control" ref="newPassword" />
                </label>
                <label>
                  Confirm password
                  <input type="password" className="form-control" ref="newPasswordConfirm"/>
                </label>

                <input type="submit" value="Change" className="mt10 btn btn-success" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordChangeForm;
