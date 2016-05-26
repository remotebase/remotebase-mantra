import React from 'react';
import {Modal} from 'react-bootstrap';
import classnames from 'classnames';

import {pathFor} from '/app/modules/core/libs/helpers';
import ModalOverview from '../containers/modal_overview';
import ModalWork from '../containers/modal_work';
import ModalTechnology from '../containers/modal_technology';
import OfficialIcon from './official_icon.jsx';

const CompanyModal = ({company, navToHome, companyTab}) => {
  if (company) {

    return (
      <Modal show={true}
          className="company-modal"
          onHide={navToHome.bind(this)} >
        <Modal.Header closeButton>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <img src={company.getLogoUrl()} alt="company" className="company-logo" />
              <div className="meta">
                <h2 className="company-name">
                  {company.name} <OfficialIcon company={company} /> <a className="company-link" href={company.website} target="_blank"><i className="fa fa-external-link"></i></a>
                </h2>
                <p>
                  {company.short_description}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ul className="summary list-unstyled">
                {
                  company.official ?
                  <li className="checked"><i className="fa fa-check-circle-o"></i> Official profile</li> :
                  <li className="unchecked"><i className="fa fa-circle-o"></i> Not an official profile</li>
                }
                {
                  company.num_retreats_per_year > 0 ?
                  <li className="checked"><i className="fa fa-check-circle-o"></i> Has retreats</li> :
                  <li className="unchecked"><i className="fa fa-circle-o"></i> No retreats</li>
                }
                {
                  company.is_hiring ?
                  <li className="checked"><i className="fa fa-check-circle-o"></i> Hiring {company.job_page ? <a target="_blank" href={company.job_page + '?utm_source=remotebase.io'}>(See all jobs)</a>: <span></span>}</li> :
                  <li className="unchecked"><i className="fa fa-circle-o"></i> Not hiring</li>
                }
              </ul>
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
