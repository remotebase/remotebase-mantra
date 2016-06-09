import React from 'react';
import moment from 'moment';

import SubBtn from '../containers/subscribe_button';

import OfficialIcon from './official_icon.jsx';

const ModalHeader = ({company, toggleSignInDialogue}) => (
  <div className="modal-header-container">
    <div className="row">
      <div className="col-xs-12">
        <div>
          <img src={company.getLogoUrl()} alt="company" className="company-logo" />
          <div className="meta">
            <h3 className="company-name">
              {company.name}
              <OfficialIcon company={company} />
              <a className="company-link"
                href={company.website}
                target="_blank">
                <i className="fa fa-external-link"></i>
              </a>
            </h3>
            <p className="company-desc">{company.short_description}</p>
            <SubBtn company={company} handleGuestSubscribe={toggleSignInDialogue} />
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
