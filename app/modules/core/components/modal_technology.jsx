import React from 'react';
import classnames from 'classnames';

const ModalTechnology = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-work', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-12 text-xs-center">
        <ul className="list-unstyled">
          <li className="trait-item">
            <span className="item-name">
              Technology Stack:
            </span>
            <span className="item-value">

            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ModalTechnology;
