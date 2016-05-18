import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const OfficialIcon = ({company}) => {
  if (!company.official) {
    return <span></span>;
  }

  let tooltip = (
    <Tooltip>
      This profile is managed by {company.name}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="right" overlay={tooltip}>
      <i className="fa fa-check-circle official-icon"></i>
    </OverlayTrigger>
  );
};

export default OfficialIcon;
