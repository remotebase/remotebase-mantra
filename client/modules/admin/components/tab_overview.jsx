import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

import TwitterShareBtn from '/client/modules/core/components/twitter_share_btn.jsx';
import MockFeatureButton from '/client/modules/core/containers/mock_feature_button';

const TabOverview = ({isActive, company}) => {
  let twitterTxt = `${company.name} is on @remotebase. Do you #remotework? Check out our profile:`;

  return (
    <div className={classnames('dashboard tab-overview', {hidden: !isActive})}>
      <h1 className="overview-heading">Summary for {company.name}</h1>

      <ul>
        <li># Subscribers: {company.numSubscribers || 0}</li>
        <li># profile views: <MockFeatureButton buttonTxt="View" targetName="admin-viewProfileHits" targetMeta={{companyName: company.name}} /></li>
        <li>On RemoteBase since: {moment(company.createdAt).format('YYYY MMM Do')}</li>
        <li>Profile last updated: {moment(company.createdAt).format('YYYY MMM Do')}</li>
      </ul>

      <p>
        Increase the subscribers by sharing your profile on Twitter
        <TwitterShareBtn dataText={twitterTxt}
          dataUrl={company.getProfileUrl()} />
      </p>
    </div>
  );
};

export default TabOverview;
