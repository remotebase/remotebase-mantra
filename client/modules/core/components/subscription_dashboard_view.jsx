import React from 'react';

import MockFeatureBtn from '../containers/mock_feature_button';
import EmailForm from '../containers/email_form';
import EmailList from '../containers/email_list';

const SubscriptionDashboardView = ({companies, unsubscribeFromCompany, user}) => {
  function handleUnsubscribe(companyId, e) {
    e.preventDefault();
    unsubscribeFromCompany(companyId);
  }

  return (
    <div className="row">
      <div className="col-xs-12">
        <h2>Your subscriptions</h2>
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

        <h2>Notification methods</h2>

        <p>
          Choose how you will be notified
        </p>

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="card">
              <div className="card-header">
                Email
              </div>
              <div className="card-block">
                <EmailForm />
                <EmailList emails={user.emails || []} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="card">
              <div className="card-header">
                Twitter
              </div>
              <div className="card-block">
                <MockFeatureBtn targetName="subscribe-twitter"
                  targetMeta={{userId: user._id}}
                  buttonTxt="Add Twitter" />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="card">
              <div className="card-header">
                Facebook
              </div>
              <div className="card-block">
                <MockFeatureBtn targetName="subscribe-facebook"
                  targetMeta={{userId: user._id}}
                  buttonTxt="Add Facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDashboardView;
