import React from 'react';

import OfficialIcon from './official_icon.jsx';

const ModalHeader = ({company}) => (
  <div className="row">
    <div className="modal-header-container">
      <div className="col-xs-12 section-container">
        <div className="section">
          <img src={company.getLogoUrl()} alt="company" className="company-logo" />
          <div>
            <h2 className="company-name">
              {company.name} <OfficialIcon company={company} /> <a className="company-link" href={company.website} target="_blank"><i className="fa fa-external-link"></i></a>
            </h2>
            <p className="description">
              {company.short_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModalHeader;
