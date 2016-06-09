import React from 'react';

import EmailItem from '../containers/email_item';

const EmailList = ({emails}) => (
  <ul>
    {
      emails.map((email, idx) => (
        <EmailItem email={email}
          key={idx} />
      ))
    }
  </ul>
);

export default EmailList;
