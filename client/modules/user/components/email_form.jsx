import React from 'react';

class EmailForm extends React.Component {
  handleEmailAdd() {
    const {addEmail} = this.props;
    let email = this.refs.emailAddress.value;

    addEmail(email);

    // Clear input
    this.refs.emailAddress.value = '';
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="input-group">
            <input type="email"
              placeholder="Email"
              className="form-control"
              ref="emailAddress" />
            <span className="input-group-btn">
              <button className="btn btn-secondary"
                onClick={this.handleEmailAdd.bind(this)}>Add</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailForm;
