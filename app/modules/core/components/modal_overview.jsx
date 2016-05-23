import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const ModalOverview = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-overview', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <ul className="list-unstyled overview-list">
          <li className="trait-item">
            <i className="fa fa-flag fa-fw"></i>
            <span className="item-name">
              Founded:
            </span>
            <span className="item-value">{company.founded_year}</span>
          </li>
          <li className="trait-item">

            <i className="fa fa-globe fa-fw"></i>
            <span className="item-name">
              Fully distributed
              <OverlayTrigger
                overlay={<Tooltip>Does everyone work remotely?</Tooltip>} placement="bottom">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </span>
            <span className="item-value">{company.fully_distributed ? 'Yes' : 'No'}</span>
          </li>
          <li className="trait-item">
            <i className="fa fa-building fa-fw"></i>
            <span className="item-name">
              Agency:</span>
            <span className="item-value">{company.is_agency ? 'Yes' : 'No'}</span>
          </li>
          <li className="trait-item">
            <i className="fa fa-users fa-fw"></i>
            <span className="item-name">
              Team size:
            </span>
            <span className="item-value">{company.team_size}</span>
          </li>
          <li className="trait-item">
            <i className="fa fa-money fa-fw"></i>
            <span className="item-name">
              Salary range:
            </span>
            <span className="item-value">
              {company.salary_lower_bound} ~ {company.salary_upper_bound}
            </span>
          </li>
          <li className="trait-item">
            <i className="fa fa-map fa-fw"></i>
            <span className="item-name">
              Location based salary?
              <OverlayTrigger
                overlay={<Tooltip>Do they offer salary adjusted for your cost of living?</Tooltip>} placement="bottom">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </span>
            <span className="item-value">
              {company.location_based_salary ? 'Yes' : 'No'}
            </span>
          </li>
          <li className="trait-item">
            <i className="fa fa-clock-o fa-fw"></i>
            <span className="item-name">
              Async Collaboration
              <OverlayTrigger
                overlay={<Tooltip>Can you work in your own timezone?</Tooltip>} placement="bottom">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </span>
            <span className="item-value">
              {company.asynchronous_collaboration ? 'Yes' : 'No'}
            </span>
          </li>
        </ul>
      </div>

      <div className="col-xs-12 col-sm-6">
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-unstyled overview-list">
              <li className="trait-item">
                <span className="item-name">
                  Hiring?:
                </span>
                <span className="item-value">
                  {
                    company.is_hiring ?
                    <span>Yes. <a target="_blank" href={company.job_page + '?utm_source=remotebase.io'}>See all jobs.</a></span> :
                    <span>No.</span>
                  }
                </span>
              </li>
              <li className="trait-item">
                <span className="item-name">
                  VC backed?
                  <OverlayTrigger
                    overlay={<Tooltip>Are they funded by venture capitals?</Tooltip>} placement="bottom">
                    <span className="tooltip-trigger">[?]</span>
                  </OverlayTrigger>
                  :
                </span>
                <span className="item-value">{company.vc_funded ? 'Yes' : 'No'}</span>
              </li>
              <li className="trait-item">
                <span className="item-name">
                  Retreats per year
                  <OverlayTrigger
                    overlay={<Tooltip>How many times do they meet in person per year?</Tooltip>} placement="bottom">
                    <span className="tooltip-trigger">[?]</span>
                  </OverlayTrigger>
                  :
                </span>
                <span className="item-value">{company.num_retreats_per_year}</span>
              </li>
              <li className="trait-item">
                <span className="item-name">Benefits:</span>
                <span className="item-value">
                  {company.healthcare ?
                    <span className="rb-label rb-label-hoverable">
                      healthcare
                    </span> : ''}
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
          <div className="col-xs-12">

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModalOverview;
