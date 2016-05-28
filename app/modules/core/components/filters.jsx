import React from 'react';
import _ from 'lodash';

import {filterToQuery} from '../libs/query_helpers';
import Filter from './filter.jsx';
import TeamSizeFilter from './filter_team_size.jsx';
import CommunicationFilters from './communication_filters.jsx';
import TechnologyFilters from './technology_filters.jsx';
import CollaborationFilters from './collaboration_filters.jsx';
import SearchBtn from '../containers/search_button';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    let defaultFilter = {
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

    this.state = {
      lastSearchedFilter: _.cloneDeep(defaultFilter),
      filterSelection: _.cloneDeep(defaultFilter)
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

  render() {
    return (
      <div className="filters">
        <div className="row">
          <div className="col-xs-12">

            <div className="hidden-sm-up mobile-view-filters">
              <div className="filter-row">
                <Filter label="Fully distributed"
                  updateFilter={this.updateFilter.bind(this, 'fully_distributed')}
                  isSelected={this.state.filterSelection.fully_distributed} />
                <Filter label="Hiring"
                  updateFilter={this.updateFilter.bind(this, 'is_hiring')}
                  isSelected={this.state.filterSelection.is_hiring} />
                <Filter label="Has retreats"
                  updateFilter={this.updateFilter.bind(this, 'has_retreats')}
                  isSelected={this.state.filterSelection.has_retreats}
                  tooltipText="Does the team sometimes get together physically?" />
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
                <Filter label="Agency"
                  updateFilter={this.updateFilter.bind(this, 'is_agency')}
                  isSelected={this.state.filterSelection.is_agency} />
                <Filter label="Async collaboration"
                  updateFilter={this.updateFilter.bind(this, 'asynchronous_collaboration')}
                  isSelected={this.state.filterSelection.asynchronous_collaboration}
                  tooltipText="Can you work in your own timezone?" />
              </div>
              <div className="filter-row">
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this, 'official')}
                  isSelected={this.state.filterSelection.official}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <div className="filter-definition">Communication methods</div>
              <CommunicationFilters
                updateFilter={this.updateFilter.bind(this)}
                communicationFilters={this.state.filterSelection.communication_methods} />
              <div className="filter-definition">Collaboration methods</div>
              <CollaborationFilters
                updateFilter={this.updateFilter.bind(this)}
                collaborationFilters={this.state.filterSelection.collaboration_methods} />
              <div className="filter-definition">Technologies</div>
              <TechnologyFilters
                updateFilter={this.updateFilter.bind(this)}
                technologyFilters={this.state.filterSelection.technologies} />
            </div>


            <div className="hidden-sm-down desktop-view-filters">
              <div className="filter-row">
                <Filter label="Fully distributed"
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
                <Filter label="Agency"
                  updateFilter={this.updateFilter.bind(this, 'is_agency')}
                  isSelected={this.state.filterSelection.is_agency} />
                <Filter label="Async collaboration"
                  updateFilter={this.updateFilter.bind(this, 'asynchronous_collaboration')}
                  isSelected={this.state.filterSelection.asynchronous_collaboration}
                  tooltipText="Can you work in your own timezone?" />
                <Filter label="Official"
                  updateFilter={this.updateFilter.bind(this, 'official')}
                  isSelected={this.state.filterSelection.official}
                  tooltipText="Only show the official profiles managed by companies" />
              </div>
              <div className="filter-definition">Communication methods</div>
              <CommunicationFilters
                updateFilter={this.updateFilter.bind(this)}
                communicationFilters={this.state.filterSelection.communication_methods} />
              <div className="filter-definition">Collaboration methods</div>
              <CollaborationFilters
                updateFilter={this.updateFilter.bind(this)}
                collaborationFilters={this.state.filterSelection.collaboration_methods} />
              <div className="filter-definition">Technologies</div>
              <TechnologyFilters
                updateFilter={this.updateFilter.bind(this)}
                technologyFilters={this.state.filterSelection.technologies} />
            </div>
          </div>
        </div>

        <div className="row search-actions">
          <div className="col-xs-12 col-sm-8">
            <SearchBtn onSearch={this.handleSearch.bind(this)}
              filterSelection={this.state.filterSelection}
              lastSearchedFilter={this.state.lastSearchedFilter} />
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
