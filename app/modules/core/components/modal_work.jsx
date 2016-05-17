import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';


const ModalWork = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-work', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-12 text-xs-center">
        <ul className="list-unstyled">
          <li className="trait-item">
            <span className="item-name">
              Communication methods
              <OverlayTrigger
                overlay={<Tooltip>How do the remote workers usually communicate?</Tooltip>} placement="top">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </span>
            <span className="item-value">
              {company.communication_methods.map((method_name, idx) => {
                return (
                  <span className="rb-label rb-label-hoverable"
                    key={idx}>
                    {method_name}
                  </span>
                );
              })}
            </span>
          </li>
          <li className="trait-item">
            <span className="item-name">
              Collaboration methods
              <OverlayTrigger
                overlay={<Tooltip>What tools do they use to collaborate for both code and non-code?</Tooltip>} placement="top">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </span>
            <span className="item-value">
              {company.collaboration_methods.map((method_name, idx) => {
                return (
                  <span className="rb-label rb-label-hoverable"
                    key={idx}>
                    {method_name}
                  </span>
                );
              })}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ModalWork;
