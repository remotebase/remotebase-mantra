import React from 'react';
import {Modal} from 'react-bootstrap';

import ModalHeader from '../containers/modal_header';
import ModalMenu from '../containers/modal_menu';
import ModalOverview from '../containers/modal_overview';
import ModalWork from '../containers/modal_work';
import ModalTechnology from '../containers/modal_technology';
import ModalJob from '../containers/modal_job';

class CompanyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentTab: 'overview'};
  }

  handleTabChange(newTab) {
    this.setState({currentTab: newTab});
  }

  render() {
    const {company, navToHome} = this.props;
    let {currentTab} = this.state;

    if (company) {
      return (
        <Modal show={true}
            className="company-modal"
            onHide={navToHome.bind(this)} >
          <Modal.Header closeButton>
            <ModalHeader company={company} />
          </Modal.Header>

          <ModalMenu company={company}
            currentTab={currentTab}
            handleTabChange={this.handleTabChange.bind(this)} />

          <Modal.Body>
            <ModalOverview company={company} isActive={currentTab === 'overview'} />
            <ModalWork company={company} isActive={currentTab === 'work'} />
            <ModalTechnology company={company} isActive={currentTab === 'tech'} />
            <ModalJob company={company} isActive={currentTab === 'jobs'} />
          </Modal.Body>
        </Modal>
      );
    } else {
      return <span></span>;
    }
  }
}

export default CompanyModal;
