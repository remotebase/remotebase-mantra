import React from 'react';
import {Modal} from 'react-bootstrap';

const CompanyModal = ({company, navToHome}) => {
  if (company) {
    return (
      <Modal show={true}
          className="company-modal"
          onHide={navToHome.bind(this)} >
        <Modal.Header closeButton>
          <Modal.Title>
            {company.name}
          </Modal.Title>
          <p>
            {company.description}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-xs-12">
              yo
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  } else {
    return <span></span>;
  }
};

export default CompanyModal;
