import React from 'react';
import {Modal} from 'react-bootstrap';
import classnames from 'classnames';
import {pathFor} from '/app/modules/core/libs/helpers';

const CompanyModal = ({company, navToHome, companyTab}) => {
  if (company) {
    return (
      <Modal show={true}
          className="company-modal"
          onHide={navToHome.bind(this)} >
        <Modal.Header closeButton>
          <img src={company.getLogoUrl()} alt="company" className="company-logo" />
          <Modal.Title>
            {company.name}
            <a className="company-link"
              href={company.website}
              target="_blank">
              <i className="fa fa-external-link"></i>
            </a>
          </Modal.Title>
          <div>
            {company.description}
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
          <div className={classnames('tab', 'tab-overview', {active: !companyTab})}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 text-xs-center">
                <ul className="list-unstyled">
                  <li className="trait-item">
                    <span className="item-name">Fully distributed:</span>
                    <span className="item-value">{company.fully_distributed ? 'Yes' : 'No'}</span>
                  </li>
                  <li className="trait-item">
                    <span className="item-name">Team size:</span>
                    <span className="item-value">{company.team_size}</span>
                  </li>
                  <li className="trait-item">
                    <span className="item-name">Salary range:</span>
                    <span className="item-value">
                      {company.salary_lower_bound} ~ {company.salary_upper_bound}
                    </span>
                  </li>
                  <li className="trait-item">
                    <span className="item-name">Retreats per year:</span>
                    <span className="item-value">{company.num_retreats_per_year}</span>
                  </li>
                  <li className="trait-item">
                    <span className="item-name">Benefits:</span>
                    <span className="item-value">
                      {company.healthcare ?
                        <span className="rb-label rb-label-hoverable">
                          healthcare
                        </span> :
                      ''}
                      {company.family_leave ?
                        <span className="rb-label rb-label-hoverable">
                          Family leave
                        </span> : ''}
                      {company.unlimited_vacation ?
                        <span className="rb-label rb-label-hoverable">
                          Unlimited vacation
                        </span> : ''}
                      {company.funded_vacation ?
                        <span className="rb-label rb-label-hoverable">
                          Funded vacation
                        </span> : ''}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classnames('tab', 'tab-work', {active: companyTab === 'work'})}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 text-xs-center">
                <ul className="list-unstyled">
                  <li className="trait-item">
                    <span className="item-name">
                      Async Collaboration:
                    </span>
                    <span className="item-value">
                      {company.asynchronous_collaboration ? 'Yes' : 'No'}
                    </span>
                  </li>
                  <li className="trait-item">
                    <span className="item-name">
                      Communication methods:
                    </span>
                    <span className="item-value">

                    </span>
                  </li>
                  <li className="trait-item">
                    <span className="item-name">
                      Collaboration methods:
                    </span>
                    <span className="item-value">

                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classnames('tab', 'tab-work', {active: companyTab === 'tech'})}>
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

        </Modal.Body>
      </Modal>
    );
  } else {
    return <span></span>;
  }
};

export default CompanyModal;
