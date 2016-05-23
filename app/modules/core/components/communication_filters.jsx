import React from 'react';
import _ from 'lodash';

import Filter from './filter.jsx';

// slack
// googleApps
// hipchat
// flowdock
// email
// skype

class CommunicationFilters extends React.Component {
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
                <Filter label="Slack"
                  isChecked={this.checkIfSelected.call(this, 'Slack')}
                  handleClick={this.updateSelectedValues.bind(this, 'Slack')} />
                <Filter label="Google Apps"
                  isChecked={this.checkIfSelected.call(this, 'Google Apps')}
                  handleClick={this.updateSelectedValues.bind(this, 'Google Apps')} />
                <Filter label="Email"
                  isChecked={this.checkIfSelected.call(this, 'Email')}
                  handleClick={this.updateSelectedValues.bind(this, 'Email')} />
                <Filter label="Skype"
                  isChecked={this.checkIfSelected.call(this, 'Skype')}
                  handleClick={this.updateSelectedValues.bind(this, 'Skype')} />
              </div>
              <div className="filter-row">
                <Filter label="HipChat"
                  isChecked={this.checkIfSelected.call(this, 'HipChat')}
                  handleClick={this.updateSelectedValues.bind(this, 'HipChat')} />
                <Filter label="Flowdock"
                  isChecked={this.checkIfSelected.call(this, 'Flowdock')}
                  handleClick={this.updateSelectedValues.bind(this, 'Flowdock')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunicationFilters;
