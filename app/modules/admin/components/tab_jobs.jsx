import React from 'react';
import classnames from 'classnames';

const TabJobs = ({isActive}) => (
  <div className={classnames('dashboard text-xs-center', {hidden: !isActive})}>
    <img src="/images/cat.png" alt="not-here-yet" className="not-here-yet-cat" />
    <h2>Not here yet.</h2>
  </div>
);

export default TabJobs;
