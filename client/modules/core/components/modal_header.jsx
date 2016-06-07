import React from 'react';
import moment from 'moment';

import MockSubBtn from '../containers/mock_subscribe_button';

import OfficialIcon from './official_icon.jsx';

const ModalHeader = ({company}) => (
  <div className="modal-header-container">
    <div className="row">
      <div className="col-xs-12">
        <div>
          <img src={company.getLogoUrl()} alt="company" className="company-logo" />
          <div className="meta">
            <h3 className="company-name">{company.name}</h3>
            <p className="company-desc">{company.short_description}</p>
            <MockSubBtn company={company} />
          </div>
        </div>
      </div>
    </div>

    <div className="timestamp">
      Added: {moment(company.createdAt).format('MMM Do YY ')} | Updated: {moment(company.updatedAt || company.createdAt).format('MMM Do YY')}
    </div>
  </div>
);

export default ModalHeader;
