import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import {filterToQuery} from '../libs/query_helpers';
import Filter from './filter.jsx';
import TeamSizeFilter from './filter_team_size.jsx';

class Filters extends React.Component {
  handleSearch() {
    const {changeQuery} = this.props;
    let query = this.makeQuery();

    changeQuery(query);
  }

  makeQuery() {
    let filterSelection = {
      fully_distributed: this.refs.fullyDistributed.getValue(),
      is_hiring: this.refs.isHiring.getValue(),
      team_size: this.refs.teamSize.getValue(),
      has_retreats: this.refs.hasRetreats.getValue(),
      vc_backed: this.refs.vcBacked.getValue(),
      is_agency: this.refs.is_agency.getValue(),
      asynchronous_collaboration: this.refs.asyncCollaboration.getValue(),
    };

    return filterToQuery(filterSelection);
  }

  render() {
    return (
      <div className="filters">
        <div className="row">
          <div className="col-xs-12">
            <div className="filter-row">
              <Filter label="Fully distributed" ref="fullyDistributed" />
              <Filter label="Hiring" ref="isHiring" />
              <TeamSizeFilter ref="teamSize" />
              <Filter label="Has retreats"
                ref="hasRetreats"
                tooltipText="Does the team sometimes get together physically?" />
              <Filter label="VC backed" ref="vcBacked" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Filter label="Agency" ref="is_agency" />
            <Filter label="Async collaboration"
              ref="asyncCollaboration"
              tooltipText="Can you work in your own timezone?" />
          </div>
        </div>


        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <button onClick={this.handleSearch.bind(this)}
              className="btn search-btn">Find</button>
          </div>
          <div className="col-xs-12 col-sm-4">
            <a className="btn add-company-btn typeform-share"
              href="https://mike706.typeform.com/to/o6eSiQ"
              data-mode="1"
              target="_blank">
              Add company
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
