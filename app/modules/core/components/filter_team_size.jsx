import React from 'react';
import classnames from 'classnames';

class FilterTeamSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedValue: null};
  }

  getValue() {
    return this.state.selectedValue;
  }

  updateSelectedValue(val) {
    // Unselect if alrady selected
    if (this.state.selectedValue === val) {
      this.setState({selectedValue: null});
      return;
    }

    this.setState({selectedValue: val});
  }

  render() {
    return (
      <div className="radio-filter team-size-filter">
        <div className={classnames('filter-label', {active: this.state.selectedValue === 'lt10'})}
          onClick={this.updateSelectedValue.bind(this, 'lt10')}>
          &lt; 10
        </div>
        <div className={classnames('filter-label', {active: this.state.selectedValue === 'tenToFifty'})}
          onClick={this.updateSelectedValue.bind(this, 'tenToFifty')}>
          10 ~ 50
        </div>
        <div className={classnames('filter-label', {active: this.state.selectedValue === 'fiftyToHundred'})}
          onClick={this.updateSelectedValue.bind(this, 'fiftyToHundred')}>
          50 ~ 100
        </div>
        <div className={classnames('filter-label', {active: this.state.selectedValue === 'gt100'})}
          onClick={this.updateSelectedValue.bind(this, 'gt100')}>
          &gt; 100
        </div>
      </div>
    );
  }
}

export default FilterTeamSize;
