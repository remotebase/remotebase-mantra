import React from 'react';
import classnames from 'classnames';

import MockFeatureBtn from '/client/modules/core/containers/mock_feature_button';
import EmailForm from '../containers/email_form';
import EmailList from '../containers/email_list';

const NotificationMethodsTab = ({isActive, user}) => (
  <div className={classnames({hidden: !isActive})}>
    <div className="row">
      <div className="col-xs-12">
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
      <div className="col-xs-12">
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
      <div className="col-xs-12">
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
);

export default NotificationMethodsTab;
