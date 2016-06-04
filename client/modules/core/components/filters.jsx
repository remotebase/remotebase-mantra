import React from 'react';
import _ from 'lodash';

import {regions} from '/client/modules/core/libs/data';
import {filterToQuery} from '../libs/query_helpers';
import Filter from './filter.jsx';
import TeamSizeFilter from './filter_team_size.jsx';
import CommunicationFilters from './communication_filters.jsx';
import TechnologyFilters from './technology_filters.jsx';
import CollaborationFilters from './collaboration_filters.jsx';
import NameFilter from './name_filter.jsx';
import DropdownSelectFilter from './dropdown_select_filter.jsx';
import SearchBtn from '../containers/search_button';
import UnselectAllButton from '../containers/unselect_all_button';

const defaultFilter = {
  name: '',
  fully_distributed: false,
  is_hiring: false,
  official: false,
  team_size: {
    lt10: false,
    gte10lte25: false,
    gte25lte50: false,
    gt50: false
  },
  hiring_region: 'Worldwide',
  has_retreats: false,
  vc_funded: false,
  bootstrapped: false,
  is_agency: false,
  is_standalone: false,
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
    Trello: false,
    GoogleApps: false
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

  updateFilter(key, isSelected) {
    let {filterSelection} = this.state;
    _.set(filterSelection, key, isSelected);

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
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="fully_distributed"
                  isSelected={this.state.filterSelection.fully_distributed} />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="is_hiring"
                  isSelected={this.state.filterSelection.is_hiring}
                  klass="hiring-filter" />
                <Filter label="Retreats"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="has_retreats"
                  isSelected={this.state.filterSelection.has_retreats}
                  tooltipText="Does the team sometimes get together physically?"
                  klass="retreats-filter" />
              </div>
              <div className="filter-row">
                <TeamSizeFilter updateFilter={this.updateFilter.bind(this)}
                  filterSelection={this.state.filterSelection} />
              </div>
              <div className="filter-row">
                <div className="filter-group funding-filters">
                  <Filter label="VC"
                    updateFilter={this.updateFilter.bind(this)}
                    filterKey="vc_funded"
                    klass="vc-filter"
                    isSelected={this.state.filterSelection.vc_funded}
                    mutuallyExclusiveFilters={[ 'bootstrapped' ]} />
                  <Filter label="Bootstrapped"
                    updateFilter={this.updateFilter.bind(this)}
                    filterKey="bootstrapped"
                    isSelected={this.state.filterSelection.bootstrapped}
                    mutuallyExclusiveFilters={[ 'vc_funded' ]} />
                </div>
                <div className="filter-group">
                  <Filter label="Consulting"
                    updateFilter={this.updateFilter.bind(this)}
                    filterKey="is_agency"
                    isSelected={this.state.filterSelection.is_agency}
                    mutuallyExclusiveFilters={[ 'is_standalone' ]} />
                  <Filter label="Standalone"
                    updateFilter={this.updateFilter.bind(this)}
                    filterKey="is_standalone"
                    isSelected={this.state.filterSelection.is_standalone}
                    mutuallyExclusiveFilters={[ 'is_agency' ]} />
                </div>
              </div>
              <div className="filter-row">
                <Filter label="Flexible timezone"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="asynchronous_collaboration"
                  isSelected={this.state.filterSelection.asynchronous_collaboration} />
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="official"
                  isSelected={this.state.filterSelection.official}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <div className="filter-row">
                <NameFilter updateFilter={this.updateFilter.bind(this, 'name')}
                  currentValue={this.state.filterSelection.name} />
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


            <div className="hidden-sm-down desktop-view-filters">
              <div className="filter-row filter-row-stretch">
                <Filter label="Fully remote"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="fully_distributed"
                  isSelected={this.state.filterSelection.fully_distributed} />
                <Filter label="Has retreats"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="has_retreats"
                  isSelected={this.state.filterSelection.has_retreats}
                  tooltipText="Does the team sometimes get together physically?" />
                <Filter label="Flexible timezone"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="asynchronous_collaboration"
                  isSelected={this.state.filterSelection.asynchronous_collaboration} />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="is_hiring"
                  klass="hiring-filter"
                  isSelected={this.state.filterSelection.is_hiring} />
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this)}
                  filterKey="official"
                  klass="official-filter"
                  isSelected={this.state.filterSelection.official}
                  tooltipText="Only show the official profiles managed by companies" />
                <NameFilter updateFilter={this.updateFilter.bind(this, 'name')}
                  currentValue={this.state.filterSelection.name} />
              </div>
              <div className="filter-row">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <h3 className="filter-definition hidden-sm-down">Team size</h3>
                    <TeamSizeFilter updateFilter={this.updateFilter.bind(this)}
                      filterSelection={this.state.filterSelection} />
                  </div>
                  <div className="col-md-4 col-sm-3 col-xs-12">
                    <h3 className="filter-definition">Company type</h3>

                    <div className="filter-group">
                      <Filter label="Standalone"
                        updateFilter={this.updateFilter.bind(this)}
                        filterKey="is_standalone"
                        isSelected={this.state.filterSelection.is_standalone}
                        mutuallyExclusiveFilters={[ 'is_agency' ]} />
                      <Filter label="Consultancy"
                        updateFilter={this.updateFilter.bind(this)}
                        filterKey="is_agency"
                        isSelected={this.state.filterSelection.is_agency}
                        mutuallyExclusiveFilters={[ 'is_standalone' ]} />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-3 col-xs-12">
                    <h3 className="filter-definition">Funding</h3>

                  <div className="filter-group">
                    <Filter label="Bootstrapped"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="bootstrapped"
                      isSelected={this.state.filterSelection.bootstrapped}
                      mutuallyExclusiveFilters={[ 'vc_funded' ]} />
                    <Filter label="VC backed"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="vc_funded"
                      isSelected={this.state.filterSelection.vc_funded}
                      mutuallyExclusiveFilters={[ 'bootstrapped' ]} />
                  </div>
                  </div>
                </div>
              </div>
              <div className="filter-row">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <h3 className="filter-definition">Hiring region</h3>
                    <DropdownSelectFilter selectedValue={this.state.filterSelection.hiring_region}
                      defaultValue="Worldwide"
                      possibleOptions={regions}
                      updateFilter={this.updateFilter.bind(this, 'hiring_region')} />
                  </div>
                </div>
              </div>
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
