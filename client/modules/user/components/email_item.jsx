import React from 'react';

const EmailItem = ({email, sendVerificationEmail, removeEmail}) => (
  <li>
    {email.address} - {email.verified ? 'verified' : 'not verified'}
    {
      email.verified ?
      <span></span> :
      <a href="#"
        onClick={sendVerificationEmail.bind(this, email.address)}>
        Re-send verification email
      </a>
    }
    <a href="#" onClick={removeEmail.bind(this, email.address)}>Remove</a>
  </li>
);

export default EmailItem;
