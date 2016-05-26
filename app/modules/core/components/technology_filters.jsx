import React from 'react';

import Filter from './filter.jsx';

//   'Node.js',
//   'MySQL',
//   'MongoDB',
//   'Javascript',
//   'Ruby on Rails',
//   'C',
//   'Python',
//   'React',
//   'Java'

class TechnologyFilters extends React.Component {
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
                <Filter label="Node.js"
                  isChecked={this.checkIfSelected.call(this, 'Node.js')}
                  handleClick={this.updateSelectedValues.bind(this, 'Node.js')} />
                <Filter label="MySQL"
                  isChecked={this.checkIfSelected.call(this, 'MySQL')}
                  handleClick={this.updateSelectedValues.bind(this, 'MySQL')} />
                <Filter label="MongoDB"
                  isChecked={this.checkIfSelected.call(this, 'MongoDB')}
                  handleClick={this.updateSelectedValues.bind(this, 'MongoDB')} />
                <Filter label="Javascript"
                  isChecked={this.checkIfSelected.call(this, 'Javascript')}
                  handleClick={this.updateSelectedValues.bind(this, 'Javascript')} />
              </div>
              <div className="filter-row">
                <Filter label="Ruby on Rails"
                  isChecked={this.checkIfSelected.call(this, 'Ruby on Rails')}
                  handleClick={this.updateSelectedValues.bind(this, 'Ruby on Rails')} />
                <Filter label="Java"
                  isChecked={this.checkIfSelected.call(this, 'Java')}
                  handleClick={this.updateSelectedValues.bind(this, 'Java')} />
                <Filter label="Python"
                  isChecked={this.checkIfSelected.call(this, 'Python')}
                  handleClick={this.updateSelectedValues.bind(this, 'Python')} />
                <Filter label="PHP"
                  isChecked={this.checkIfSelected.call(this, 'PHP')}
                  handleClick={this.updateSelectedValues.bind(this, 'PHP')} />
              </div>
            </div>
          </div>

          <div className="hidden-sm-down">
            <div className="filter-group">
              <div className="filter-row">
                <Filter label="Node.js"
                  isChecked={this.checkIfSelected.call(this, 'Node.js')}
                  handleClick={this.updateSelectedValues.bind(this, 'Node.js')} />
                <Filter label="MySQL"
                  isChecked={this.checkIfSelected.call(this, 'MySQL')}
                  handleClick={this.updateSelectedValues.bind(this, 'MySQL')} />
                <Filter label="MongoDB"
                  isChecked={this.checkIfSelected.call(this, 'MongoDB')}
                  handleClick={this.updateSelectedValues.bind(this, 'MongoDB')} />
                <Filter label="Javascript"
                  isChecked={this.checkIfSelected.call(this, 'Javascript')}
                  handleClick={this.updateSelectedValues.bind(this, 'Javascript')} />
                <Filter label="Ruby on Rails"
                  isChecked={this.checkIfSelected.call(this, 'Ruby on Rails')}
                  handleClick={this.updateSelectedValues.bind(this, 'Ruby on Rails')} />
                <Filter label="Java"
                  isChecked={this.checkIfSelected.call(this, 'Java')}
                  handleClick={this.updateSelectedValues.bind(this, 'Java')} />
                <Filter label="Python"
                  isChecked={this.checkIfSelected.call(this, 'Python')}
                  handleClick={this.updateSelectedValues.bind(this, 'Python')} />
                <Filter label="PHP"
                  isChecked={this.checkIfSelected.call(this, 'PHP')}
                  handleClick={this.updateSelectedValues.bind(this, 'PHP')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnologyFilters;
