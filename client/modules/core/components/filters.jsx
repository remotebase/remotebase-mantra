import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import {regions} from '/client/modules/core/libs/data';
import {filterToQuery} from '../libs/query_helpers';
import Filter from './filter.jsx';
import TeamSizeFilter from './filter_team_size.jsx';
import CommunicationFilters from './communication_filters.jsx';
import TechnologyFilters from './technology_filters.jsx';
import CollaborationFilters from './collaboration_filters.jsx';
import NameFilter from './name_filter.jsx';
import DropdownSelectFilter from './dropdown_select_filter.jsx';
import UnselectAllButton from '../containers/unselect_all_button';
import MoreFiltersButton from '../containers/more_filters_btn';

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
      filterSelection: _.cloneDeep(defaultFilter),
      filterDisplayLevel: 1 // 1~3
    };
  }

  handleSearch() {
    const {changeQuery} = this.props;
    let {filterSelection} = this.state;

    let query = filterToQuery(filterSelection);
    changeQuery(query);
  }

  updateFilter(key, isSelected) {
    let {filterSelection} = this.state;
    _.set(filterSelection, key, isSelected);

    this.setState({filterSelection}, this.handleSearch);
  }

  resetFilter() {
    this.setState({filterSelection: _.cloneDeep(defaultFilter)}, this.handleSearch);
  }

  handleShowMoreFilters() {
    let currentLevel = this.state.filterDisplayLevel;
    if (currentLevel >= 3) {
      return;
    }

    this.setState({filterDisplayLevel: currentLevel + 1});
  }

  handleShowLessFilters() {
    this.setState({filterDisplayLevel: 1});
  }

  render() {
    return (
      <div className="filters-container">
        <div className="filters container">
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
                  <DropdownSelectFilter selectedValue={this.state.filterSelection.hiring_region}
                    defaultValue="Worldwide"
                    possibleOptions={regions}
                    updateFilter={this.updateFilter.bind(this, 'hiring_region')} />
                </div>
                <CommunicationFilters
                  updateFilter={this.updateFilter.bind(this)}
                  communicationFilters={this.state.filterSelection.communication_methods}
                  isShowing={true} />
                <CollaborationFilters
                  updateFilter={this.updateFilter.bind(this)}
                  collaborationFilters={this.state.filterSelection.collaboration_methods}
                  isShowing={true} />
                <TechnologyFilters
                  updateFilter={this.updateFilter.bind(this)}
                  technologyFilters={this.state.filterSelection.technologies}
                  isShowing={true} />
              </div>


              <div className="hidden-sm-down desktop-view-filters">
                <div className="filter-row">
                  <div className="filter-1x">
                    <Filter label="Fully remote"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="fully_distributed"
                      isSelected={this.state.filterSelection.fully_distributed} />
                  </div>
                  <div className="filter-1x">
                    <Filter label="Hiring"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="is_hiring"
                      klass="hiring-filter"
                      isSelected={this.state.filterSelection.is_hiring} />
                  </div>
                  <div className="filter-1x">
                    <Filter label="Has retreats"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="has_retreats"
                      isSelected={this.state.filterSelection.has_retreats}
                      tooltipText="Does the team sometimes get together physically?" />
                  </div>
                  <div className="filter-1x">
                    <Filter label="Flexible timezone"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="asynchronous_collaboration"
                      isSelected={this.state.filterSelection.asynchronous_collaboration} />
                  </div>
                  <div className="filter-1x">
                    <Filter label="Official"
                      updateFilter={this.updateFilter.bind(this)}
                      filterKey="official"
                      isSelected={this.state.filterSelection.official} />
                  </div>
                </div>

                <div className={classnames('filter-row', {hidden: this.state.filterDisplayLevel < 2})}>
                  <div className="filter-2x">
                    <h3 className="filter-definition hidden-sm-down">Team size</h3>
                    <TeamSizeFilter updateFilter={this.updateFilter.bind(this)}
                      filterSelection={this.state.filterSelection} />
                  </div>
                  <div className="filter-2x">
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
                  <div className="filter-1x">
                    <NameFilter updateFilter={this.updateFilter.bind(this, 'name')}
                      currentValue={this.state.filterSelection.name} />
                  </div>
                </div>

                <div className={classnames('filter-row', {hidden: this.state.filterDisplayLevel < 3})}>
                  <div className="filter-4x">
                    <CommunicationFilters
                      updateFilter={this.updateFilter.bind(this)}
                      communicationFilters={this.state.filterSelection.communication_methods} />
                  </div>
                  <div className="filter-4x">
                    <CollaborationFilters
                      updateFilter={this.updateFilter.bind(this)}
                      collaborationFilters={this.state.filterSelection.collaboration_methods} />
                  </div>
                  <div className="filter-5x">
                    <TechnologyFilters
                      updateFilter={this.updateFilter.bind(this)}
                      technologyFilters={this.state.filterSelection.technologies} />
                  </div>
                </div>

                <div className="filter-row filter-action-row">
                  <div className="filter-1x">
                    <UnselectAllButton onUnselectAll={this.resetFilter.bind(this)} />
                  </div>
                  <div className="filter-1x">
                    <MoreFiltersButton onMoreFilters={this.handleShowMoreFilters.bind(this)}
                      onLessFilters={this.handleShowLessFilters.bind(this)}
                      canShowMore={this.state.filterDisplayLevel < 3} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
