import React from 'react';
import classnames from 'classnames';

const Alert = ({message}) => {
  if (message) {
    return (
      <div className={classnames('alert', {[`alert-${message.type}`]: true})}>
        {message.value}
      </div>
    );
  }

  return <span></span>;
};

export default Alert;
