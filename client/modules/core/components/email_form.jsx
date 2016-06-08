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
      <div>
        <input type="email"
          placeholder="Email"
          className="form-control"
          ref="emailAddress" />
        <button className="btn rb-btn-primary rb-btn-small"
          onClick={this.handleEmailAdd.bind(this)}>Add</button>
      </div>
    );
  }
}

export default EmailForm;
