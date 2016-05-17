import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';


const ModalTechnology = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-work', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-12 text-xs-center">
        <ul className="list-unstyled">
          <li className="trait-item">
            <span className="item-name">
              Technology Stack
              <OverlayTrigger
                overlay={<Tooltip>What technology do they use?</Tooltip>} placement="top">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </span>
            <span className="item-value">
              {company.technologies.map((technology, idx) => {
                return (
                  <span className="rb-label rb-label-hoverable"
                    key={idx}>
                    {technology}
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

export default ModalTechnology;
