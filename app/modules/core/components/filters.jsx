import React from 'react';
import classnames from 'classnames';

import {filterToQuery} from '../libs/query_helpers';
import Filter from './filter.jsx';
import TeamSizeFilter from './filter_team_size.jsx';
import CommunicationFilters from './communication_filters.jsx';
import TechnologyFilters from './technology_filters.jsx';
import CollaborationFilters from './collaboration_filters.jsx';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastSearchFilter: {},
      filterIsDirty: false, // has the user interacted with filter since last search?
      filterSelection: {
        fully_distributed: false,
        is_hiring: false,
        official: false,
        team_size: null,
        has_retreats: false,
        vc_backed: false,
        is_agency: false,
        asynchronous_collaboration: false,
        communication_methods: [],
        collaboration_methods: [],
        technologies: []
      }
    };
  }

  handleSearch() {
    const {changeQuery} = this.props;
    let {filterSelection} = this.state;

    let query = filterToQuery(filterSelection);
    changeQuery(query);
    this.setState({filterIsDirty: false});
  }

  updateFilter(key, val) {
    let {filterSelection} = this.state;
    filterSelection[key] = val;

    this.setState({filterSelection, filterIsDirty: true});
  }

  render() {
    return (
      <div className="filters">
        <div className="row">
          <div className="col-xs-12">
            <div className="hidden-sm-up mobile-view-filters">
              <div className="filter-row">
                <Filter label="Fully distributed"
                  updateFilter={this.updateFilter.bind(this, 'fully_distributed')}
                  klass="filter-fully-distributed" />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this, 'is_hiring')}
                  klass="filter-is-hiring" />
                <Filter label="Has retreats"
                  updateFilter={this.updateFilter.bind(this, 'has_retreats')}
                  tooltipText="Does the team sometimes get together physically?"
                  klass="filter-has-retreats" />
              </div>
              <div className="filter-row">
                <TeamSizeFilter updateFilter={this.updateFilter.bind(this, 'team_size')} />
              </div>
              <div className="filter-row">
                <Filter label="VC backed"
                  updateFilter={this.updateFilter.bind(this, 'vc_backed')}
                  klass="filter-vc-backed" />
                <Filter label="Agency"
                  updateFilter={this.updateFilter.bind(this, 'is_agency')}
                  klass="filter-agency" />
                <Filter label="Async collaboration"
                  updateFilter={this.updateFilter.bind(this, 'asynchronous_collaboration')}
                  tooltipText="Can you work in your own timezone?"
                  klass="filter-async-collaboration" />
              </div>
              <div className="filter-row">
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this, 'official')}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <div className="filter-definition">Communication methods</div>
              <CommunicationFilters
                updateFilter={this.updateFilter.bind(this, 'communication_methods')} />
              <div className="filter-definition">Technologies</div>
              <TechnologyFilters
                updateFilter={this.updateFilter.bind(this, 'technologies')} />
            </div>


            <div className="hidden-sm-down desktop-view-filters">
              <div className="filter-row">
                <Filter label="Fully distributed"
                  updateFilter={this.updateFilter.bind(this, 'fully_distributed')} />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this, 'is_hiring')} />
                <TeamSizeFilter updateFilter={this.updateFilter.bind(this, 'team_size')} />
                <Filter label="Has retreats"
                  updateFilter={this.updateFilter.bind(this, 'has_retreats')}
                  tooltipText="Does the team sometimes get together physically?" />
                <Filter label="VC backed"
                  updateFilter={this.updateFilter.bind(this, 'vc_funded')} />
              </div>
              <div className="filter-row">
                <Filter label="Agency"
                  updateFilter={this.updateFilter.bind(this, 'is_agency')} />
                <Filter label="Async collaboration"
                  updateFilter={this.updateFilter.bind(this, 'asynchronous_collaboration')}
                  tooltipText="Can you work in your own timezone?" />
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this, 'official')}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <div className="filter-definition">Communication methods</div>
              <CommunicationFilters
                updateFilter={this.updateFilter.bind(this, 'communication_methods')} />
              <div className="filter-definition">Collaboration methods</div>
              <CollaborationFilters
                updateFilter={this.updateFilter.bind(this, 'collaboration_methods')} />
              <div className="filter-definition">Technologies</div>
              <TechnologyFilters
                updateFilter={this.updateFilter.bind(this, 'technologies')} />
            </div>
          </div>
        </div>

        <div className="row search-actions">
          <div className="col-xs-12 col-sm-8">
            <button onClick={this.handleSearch.bind(this)}
              className={classnames('btn search-btn',
                {'search-btn-flash': this.state.filterIsDirty})}>
              Find
            </button>
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
