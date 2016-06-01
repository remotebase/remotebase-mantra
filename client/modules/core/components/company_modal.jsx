import React from 'react';
import {Modal} from 'react-bootstrap';

import ModalHeader from '../containers/modal_header';
import ModalMenu from '../containers/modal_menu';
import ModalOverview from '../containers/modal_overview';
import ModalWork from '../containers/modal_work';
import ModalTechnology from '../containers/modal_technology';
import ModalJob from '../containers/modal_job';

const CompanyModal = ({company, navToHome, companyTab}) => {
  if (company) {
    return (
      <Modal show={true}
          className="company-modal"
          onHide={navToHome.bind(this)} >
        <Modal.Header closeButton>
          <ModalHeader company={company} />
        </Modal.Header>

        <ModalMenu company={company} companyTab={companyTab} />

        <Modal.Body>
          <ModalOverview company={company} isActive={!companyTab} />
          <ModalWork company={company} isActive={companyTab === 'work'} />
          <ModalTechnology company={company} isActive={companyTab === 'tech'} />
          <ModalJob company={company} isActive={companyTab === 'jobs'} />
        </Modal.Body>
      </Modal>
    );
  } else {
    return <span></span>;
  }
};

export default CompanyModal;
