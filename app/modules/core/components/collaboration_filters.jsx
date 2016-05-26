import React from 'react';
import _ from 'lodash';

import Filter from './filter.jsx';

// let collaborationMethods = [
//   'Trello',
//   'Basecamp',
//   'Asana',
//   'Desk.com',
//   'Help Scout',
//   'Google Apps',
//   'iDoneThis',
//   'Blossom',
//   'Zendesk',
//   'Front'
// ];

class CollaborationFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedValues: []};
  }

  checkIfSelected(val) {
    return this.state.selectedValues.indexOf(val) > -1;
  }

  updateSelectedValues(val) {
    const {updateFilter} = this.props;
    let newState = this.state.selectedValues;

    // If already selected, unselect
    if (this.state.selectedValues.indexOf(val) > -1) {
      newState = _.remove(newState, val);
    } else {
      newState.push(val);
    }

    this.setState({selectedValues: newState});
    updateFilter(newState);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="hidden-sm-up">
            <div className="filter-group">
              <div className="filter-row">
                <Filter label="Blossom"
                  isChecked={this.checkIfSelected.call(this, 'Blossom')}
                  handleClick={this.updateSelectedValues.bind(this, 'Blossom')} />
                <Filter label="Basecamp"
                  isChecked={this.checkIfSelected.call(this, 'Basecamp')}
                  handleClick={this.updateSelectedValues.bind(this, 'Basecamp')} />
                <Filter label="iDoneThis"
                  isChecked={this.checkIfSelected.call(this, 'iDoneThis')}
                  handleClick={this.updateSelectedValues.bind(this, 'iDoneThis')} />
                <Filter label="Trello"
                  isChecked={this.checkIfSelected.call(this, 'Trello')}
                  handleClick={this.updateSelectedValues.bind(this, 'Trello')} />
              </div>
            </div>
          </div>

          <div className="hidden-sm-down">
            <div className="filter-group">
              <div className="filter-row">
                <Filter label="Blossom"
                  isChecked={this.checkIfSelected.call(this, 'Blossom')}
                  handleClick={this.updateSelectedValues.bind(this, 'Blossom')} />
                <Filter label="Basecamp"
                  isChecked={this.checkIfSelected.call(this, 'Basecamp')}
                  handleClick={this.updateSelectedValues.bind(this, 'Basecamp')} />
                <Filter label="iDoneThis"
                  isChecked={this.checkIfSelected.call(this, 'iDoneThis')}
                  handleClick={this.updateSelectedValues.bind(this, 'iDoneThis')} />
                <Filter label="Trello"
                  isChecked={this.checkIfSelected.call(this, 'Trello')}
                  handleClick={this.updateSelectedValues.bind(this, 'Trello')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollaborationFilters;
