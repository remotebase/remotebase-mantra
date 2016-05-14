import React from 'react';
import {Modal} from 'react-bootstrap';
import HiringBanner from './hiring_banner';

const CompanyModal = ({company, navToHome}) => {
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

        <HiringBanner company={company} />

        <Modal.Body>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="category-heading">
                <i className="fa fa-users"></i>
                Team
              </h2>
              <ul className="list-unstyled">
                <li>
                  <span className="item-name">Founded:</span>
                  <span className="item-value">{company.founded_year}</span>
                </li>
                <li>
                  <span className="item-name">Team size:</span>
                  <span className="item-value">{company.team_size}</span>
                </li>
                <li>
                  <span className="item-name">Fully distributed:</span>
                  <span className="item-value">{company.fully_distributed ? 'Yes' : 'No'}</span>
                </li>
                <li>
                  <span className="item-name">Agency:</span>
                  <span className="item-value">{company.fully_distributed ? 'Yes' : 'No'}</span>
                </li>
                <li>
                  <span className="item-name">Retreats per year:</span>
                  <span className="item-value">{company.num_retreats_per_year}</span>
                </li>
              </ul>

              <h2 className="category-heading">
                <i className="fa fa-money"></i>
                Compensation
              </h2>
              <ul className="list-unstyled">
                <li>
                  <span className="item-name">Salary range:</span>
                  <span className="item-value">
                    ${company.salary_lower_bound} ~ ${company.salary_upper_bound}
                  </span>
                </li>
                <li>
                  <span className="item-name">Location-based salary:</span>
                  <span className="item-value">
                    {company.location_based_salary ? 'Yes' : 'No'}
                  </span>
                </li>
                <li>
                  <span className="item-name">Benefits:</span>
                  <span className="item-value">
                    {company.healthcare ? 'healthcare' : ''} {company.family_leave ? 'Family leave' : ''}
                  </span>
                </li>
                <li>
                  <span className="item-name">Vacation:</span>
                  <span className="item-value">
                    {company.unlimited_vacation ? 'Unlimited' : ''} {company.funded_vacation ? 'Funded' : ''}
                  </span>
                </li>
                <li>
                  <span className="item-name">Equity:</span>
                  <span className="item-value">
                    {company.offers_equity ? 'Yes' : 'No'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6">
              <h2 className="category-heading">
                <i className="fa fa-laptop"></i>
                Work
              </h2>
              <ul className="list-unstyled">
                <li>
                  <span className="item-name">
                    Async Collaboration:
                  </span>
                  <span className="item-value">
                    {company.asynchronous_collaboration ? 'Yes' : 'No'}
                  </span>
                </li>
                <li>
                  <span className="item-name">
                    Workweek:
                  </span>
                  <span className="item-value">
                    {company.workweek}
                  </span>
                </li>
              </ul>

              <h2 className="category-heading">
                <i className="fa fa-wifi"></i>
                Communication
              </h2>
              <ul className="list-unstyled">

              </ul>
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
