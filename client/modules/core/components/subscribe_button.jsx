import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const SubscribeButton = ({
  company, subscribeToCompany, unsubscribeFromCompany, subscribed, handleGuestSubscribe, user, recordClick
}) => {

  function onSubscribe() {

    if (user) {
      subscribeToCompany(company._id);
    } else {
      handleGuestSubscribe();
      recordClick('subscribe', {companyName: company.name});
    }
  }

  if (subscribed) {
    return (
      <button className="btn btn-secondary rb-btn-small"
        onClick={unsubscribeFromCompany.bind(this, company._id)}>
        Unsubscribe
      </button>
    );
  } else {
    return (
      <button className="btn rb-btn-primary rb-btn-small"
        onClick={onSubscribe}>
        <OverlayTrigger overlay={tooltip} placement="right">
          <span className="tooltip-trigger">Subscribe</span>
        </OverlayTrigger>
      </button>
    );
  }
};

let tooltip = (
  <Tooltip>
    Get notified when the company profile changes (e.g. When they start hiring)
  </Tooltip>
);

export default SubscribeButton;
