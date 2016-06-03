import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import CountUp from './count_up.jsx';
import MockSubBtn from '../containers/mock_subscribe_button';

const ModalOverview = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-overview', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <ul className="list-unstyled overview-list">
          <li className="trait-item">
            <i className="fa fa-globe fa-fw"></i>
            <h4 className="item-name">
              <CountUp start={0} end={company.getDistrbituedPercent()} suffix="%" duration={2.8}/> remote
            </h4>
          </li>
          <li className="trait-item">
            <i className="fa fa-users fa-fw"></i>
            <h4 className="item-name">
              <CountUp start={0} end={company.team_size} duration={2}/> people
            </h4>
            <small className="text-muted">(Non-remote: {company.non_remote_team_size})</small>
          </li>

          <li className="trait-item">
            <i className="fa fa-home fa-fw"></i>
            <h4 className="item-name">
              Retreats per year
              <OverlayTrigger
                overlay={<Tooltip>How many times do they meet in person per year?</Tooltip>} placement="bottom">
                <span className="tooltip-trigger">[?]</span>
              </OverlayTrigger>
              :
            </h4>
            <span className="item-value">
              <CountUp start={0} end={company.num_retreats_per_year} duration={5}/>
            </span>
          </li>

          <li className="trait-item">
            <i className="fa fa-flag fa-fw"></i>
            <h4 className="item-name">
              {company.vc_funded ? 'VC funded' : 'Bootstrapped'}
            </h4>
            <small className="text-muted">(Founded {company.founded_year})</small>
          </li>

          {company.is_agency ? (
            <li className="trait-item">
              <i className="fa fa-building fa-fw"></i>
              <h4 className="item-name">
                Consultancy
              </h4>
            </li>
          ) : <span></span>}

          {company.is_hiring ? (
            <li className="trait-item">
              <i className="fa fa-bullhorn fa-fw"></i>
              <h4 className="item-name">
                Hiring
              </h4>
              {
                 <a href={company.getJobPage()} target="_blank">See all jobs</a>
              }
            </li>
          ) : <span></span>}

          <MockSubBtn company={company} />
        </ul>
      </div>

      <div className="col-xs-12 col-sm-6">
        <ul className="list-unstyled check-list">
          <li className="checked-item">
            <i className="fa fa-check-circle-o fa-fw"></i> Listed on RemoteBase
          </li>
          {
            company.official ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Official profile
              </li>
            ) : <span></span>
          }
          {
            company.location_based_salary ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Location based salary
              </li>
            ) : <span></span>
          }
          {
            company.asynchronous_collaboration ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Flexible timezone
              </li>
            ) : <span></span>
          }
          {
            company.offers_equity ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Offers equity
              </li>
            ) : <span></span>
          }
          {
            company.funded_vacation ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Funded vacation
              </li>
            ) : <span></span>
          }
          {
            company.unlimited_vacation ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Self-managed timeoff
              </li>
            ) : <span></span>
          }
          {
            company.healthcare ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Healthcare
              </li>
            ) : <span></span>
          }
          {
            company.family_leave ? (
              <li className="checked-item">
                <i className="fa fa-check-circle-o fa-fw"></i> Family leave
              </li>
            ) : <span></span>
          }

          {
            !company.location_based_salary ? (
              <li className="unchecked-item">
                <i className="fa fa-circle-o fa-fw"></i> Location based salary
              </li>
            ) : <span></span>
          }
          {
            !company.asynchronous_collaboration ? (
              <li className="unchecked-item">
                <i className="fa fa-circle-o fa-fw"></i> Flexible timezone
              </li>
            ) : <span></span>
          }
          {
            !company.official ? (
              <li className="unchecked-item">
                <i className="fa fa-circle-o fa-fw"></i> Official profile
              </li>
            ) : <span></span>
          }
        </ul>
      </div>
    </div>
  </div>
);

export default ModalOverview;
