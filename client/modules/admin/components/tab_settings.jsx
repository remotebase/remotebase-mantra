import React from 'react';
import classnames from 'classnames';

import PasswordChangeForm from '../containers/password_change_form';
import EmailChangeForm from '../containers/email_change_form';

const TabSettings = ({isActive}) => {
  return (
    <div className={classnames({hidden: !isActive})}>
      <PasswordChangeForm />
    </div>
  );
};

export default TabSettings;
