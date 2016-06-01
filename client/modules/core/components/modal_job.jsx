import React from 'react';
import classnames from 'classnames';

const ModalJob = ({isActive}) => (
  <div className={classnames('tab', 'tab-job', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-12 text-xs-center">
        <img src="/images/cat.png" alt="not-here-yet" className="not-here-yet-cat" />
        <h2>Not here yet.</h2>
      </div>
    </div>
  </div>
);

export default ModalJob;
