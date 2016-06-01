import React from 'react';
import _ from 'lodash';

import {filterToQuery} from '../libs/query_helpers';
import Filter from './filter.jsx';
import TeamSizeFilter from './filter_team_size.jsx';
import CommunicationFilters from './communication_filters.jsx';
import TechnologyFilters from './technology_filters.jsx';
import CollaborationFilters from './collaboration_filters.jsx';
import SearchBtn from '../containers/search_button';
import UnselectAllButton from '../containers/unselect_all_button';

const defaultFilter = {
  fully_distributed: false,
  is_hiring: false,
  official: false,
  team_size: null,
  has_retreats: false,
  vc_funded: false,
  is_agency: false,
  asynchronous_collaboration: false,
  communication_methods: {
    Slack: false,
    HipChat: false,
    Email: false,
    Skype: false,
    FlowDock: false
  },
  collaboration_methods: {
    Blossom: false,
    Basecamp: false,
    iDoneThis: false,
    Trello: false
  },
  technologies: {
    NodeJS: false,
    MySQL: false,
    MongoDB: false,
    JavaScript: false,
    RubyOnRails: false,
    Java: false,
    Python: false,
    PHP: false
  }
};

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastSearchedFilter: _.cloneDeep(defaultFilter),
      filterSelection: _.cloneDeep(defaultFilter),
      filtersShowing: {
        communication_methods: true,
        collaboration_methods: true,
        technologies: true,
      }
    };
  }

  handleSearch() {
    const {changeQuery} = this.props;
    let {filterSelection} = this.state;

    let query = filterToQuery(filterSelection);
    changeQuery(query);
    this.setState({lastSearchedFilter: _.cloneDeep(filterSelection)});
  }

  updateFilter(key, val) {
    let {filterSelection} = this.state;
    _.set(filterSelection, key, val);

    this.setState({filterSelection});
  }

  resetFilter() {
    this.setState({filterSelection: _.cloneDeep(defaultFilter)});
  }

  render() {
    return (
      <div className="filters">
        <div className="row">
          <div className="col-xs-12">
            <div className="hidden-sm-up mobile-view-filters">
              <div className="filter-row">
                <Filter label="Fully remote"
                  updateFilter={this.updateFilter.bind(this, 'fully_distributed')}
                  isSelected={this.state.filterSelection.fully_distributed} />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this, 'is_hiring')}
                  isSelected={this.state.filterSelection.is_hiring}
                  klass="hiring-filter" />
                <Filter label="Retreats"
                  updateFilter={this.updateFilter.bind(this, 'has_retreats')}
                  isSelected={this.state.filterSelection.has_retreats}
                  tooltipText="Does the team sometimes get together physically?"
                  klass="retreats-filter" />
              </div>
              <div className="filter-row">
                <TeamSizeFilter selectedValue={this.state.filterSelection.team_size}
                   selectedValue={this.state.filterSelection.team_size}
                   updateFilter={this.updateFilter.bind(this, 'team_size')} />
              </div>
              <div className="filter-row">
                <Filter label="VC backed"
                  updateFilter={this.updateFilter.bind(this, 'vc_funded')}
                  isSelected={this.state.filterSelection.vc_funded} />
                <Filter label="Consultancy"
                  updateFilter={this.updateFilter.bind(this, 'is_agency')}
                  isSelected={this.state.filterSelection.is_agency} />
                <Filter label="Flexible timezone"
                  updateFilter={this.updateFilter.bind(this, 'asynchronous_collaboration')}
                  isSelected={this.state.filterSelection.asynchronous_collaboration} />
              </div>
              <div className="filter-row">
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this, 'official')}
                  isSelected={this.state.filterSelection.official}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <CommunicationFilters
                updateFilter={this.updateFilter.bind(this)}
                communicationFilters={this.state.filterSelection.communication_methods} />
              <CollaborationFilters
                updateFilter={this.updateFilter.bind(this)}
                collaborationFilters={this.state.filterSelection.collaboration_methods} />
              <TechnologyFilters
                updateFilter={this.updateFilter.bind(this)}
                technologyFilters={this.state.filterSelection.technologies} />
            </div>


            <div className="hidden-sm-down desktop-view-filters">
              <div className="filter-row">
                <Filter label="Fully remote"
                  updateFilter={this.updateFilter.bind(this, 'fully_distributed')}
                  isSelected={this.state.filterSelection.fully_distributed} />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this, 'is_hiring')}
                  isSelected={this.state.filterSelection.is_hiring} />
                <TeamSizeFilter selectedValue={this.state.filterSelection.team_size}
                   updateFilter={this.updateFilter.bind(this, 'team_size')} />
                <Filter label="Has retreats"
                  updateFilter={this.updateFilter.bind(this, 'has_retreats')}
                  isSelected={this.state.filterSelection.has_retreats}
                  tooltipText="Does the team sometimes get together physically?" />
                <Filter label="VC backed"
                  updateFilter={this.updateFilter.bind(this, 'vc_funded')}
                  isSelected={this.state.filterSelection.vc_funded} />
              </div>
              <div className="filter-row">
                <Filter label="Consultancy"
                  updateFilter={this.updateFilter.bind(this, 'is_agency')}
                  isSelected={this.state.filterSelection.is_agency} />
                <Filter label="Flexible timezone"
                  updateFilter={this.updateFilter.bind(this, 'asynchronous_collaboration')}
                  isSelected={this.state.filterSelection.asynchronous_collaboration} />
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this, 'official')}
                  isSelected={this.state.filterSelection.official}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <CommunicationFilters
                updateFilter={this.updateFilter.bind(this)}
                communicationFilters={this.state.filterSelection.communication_methods}
                isShowing={this.state.filtersShowing.communication_methods} />
              <CollaborationFilters
                updateFilter={this.updateFilter.bind(this)}
                collaborationFilters={this.state.filterSelection.collaboration_methods}
                isShowing={this.state.filtersShowing.collaboration_methods} />
              <TechnologyFilters
                updateFilter={this.updateFilter.bind(this)}
                technologyFilters={this.state.filterSelection.technologies}
                isShowing={this.state.filtersShowing.technologies} />
            </div>
          </div>
        </div>

        <div className="hidden-sm-down">
          <div className="row search-actions">
            <div className="col-xs-12 col-sm-8">
              <SearchBtn onSearch={this.handleSearch.bind(this)}
                filterSelection={this.state.filterSelection}
                lastSearchedFilter={this.state.lastSearchedFilter}
                klass="rb-btn-stretch" />
            </div>
            <div className="col-xs-12 col-sm-4">
              <UnselectAllButton onUnselectAll={this.resetFilter.bind(this)}
                klass="rb-btn-stretch" />
            </div>
          </div>
        </div>

        <div className="hidden-sm-up mobile-view-actions">
          <SearchBtn onSearch={this.handleSearch.bind(this)}
            filterSelection={this.state.filterSelection}
            lastSearchedFilter={this.state.lastSearchedFilter} />
          <UnselectAllButton onUnselectAll={this.resetFilter.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Filters;
