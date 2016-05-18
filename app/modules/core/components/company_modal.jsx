import React from 'react';
import {Modal, OverlayTrigger, Button, Popover} from 'react-bootstrap';
import classnames from 'classnames';

import {pathFor} from '/app/modules/core/libs/helpers';
import ModalOverview from '../containers/modal_overview';
import ModalWork from '../containers/modal_work';
import ModalTechnology from '../containers/modal_technology';

const CompanyModal = ({company, navToHome, companyTab}) => {
  const popover = (
    <Popover title="Suggest edit">
      Send the change and the source: <a href="mailto:hello@remotebase.io">hello@remotebase.io</a> or <a href="https://twitter.com/mikeswcho">@mikeswcho</a>
    </Popover>
  );

  if (company) {
    return (
      <Modal show={true}
          className="company-modal"
          onHide={navToHome.bind(this)} >
        <Modal.Header closeButton>
          {
            company.is_hiring ? <div className="hiring-label">Hiring</div> : <span></span>
          }
          <div className="text-xs-center">
            <img src={company.getLogoUrl()} alt="company" className="company-logo" />
            <Modal.Title>
              {company.name}
              <a className="company-link"
                href={company.website}
                target="_blank">
                <i className="fa fa-external-link"></i>
              </a>
            </Modal.Title>
            <div className="company-desc">
              {company.short_description}
            </div>
          </div>
        </Modal.Header>

        <div className="menu-bar">
          <ul className="list-unstyled menu-list">
            <li className="menu-item">
              <a href={pathFor('company', {companySlug: company.slug})}
                className={classnames({active: !companyTab})}>
                Overview
              </a>
            </li>
            <li className="menu-item">
              <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'work'}})}
                className={classnames({active: companyTab === 'work'})}>
                Work
              </a>
            </li>
            <li className="menu-item">
              <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'tech'}})}
                className={classnames({active: companyTab === 'tech'})}>
                Technology
              </a>
            </li>
          </ul>
        </div>

        <Modal.Body>
          <ModalOverview company={company} isActive={!companyTab} />
          <ModalWork company={company} isActive={companyTab === 'work'} />
          <ModalTechnology company={company} isActive={companyTab === 'tech'} />
        </Modal.Body>
      </Modal>
    );
  } else {
    return <span></span>;
  }
};

export default CompanyModal;
