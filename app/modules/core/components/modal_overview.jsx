import React from 'react';
import classnames from 'classnames';

const ModalOverview = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-overview', {active: isActive})}>
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
);

export default ModalOverview;
