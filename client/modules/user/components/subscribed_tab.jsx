import React from 'react';
import classnames from 'classnames';

const SubscribedTab = ({isActive, companies, handleUnsubscribe}) => (
  <div className={classnames({hidden: !isActive})}>
    <div className="card">
      <h3 className="card-header">Your subscriptions</h3>
      <div className="card-block">
        <p>
          You will be notified when these companies update a profile or post a job.
        </p>

        <ul>
          {
            companies.map(company => (
              <li key={company._id}>
                {company.name} (<a href="#" onClick={handleUnsubscribe.bind(this, company._id)}>Unsubscribe</a>)
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
);

export default SubscribedTab;
