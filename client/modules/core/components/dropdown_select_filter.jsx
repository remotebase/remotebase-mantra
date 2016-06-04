import React from 'react';
import classnames from 'classnames';

class DropdownSelectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showingOptions: false};
  }

  toggleOptionsDisplay(options = {}) {
    if (options.show !== undefined) {
      this.setState({showingOptions: options.show});
    } else {
      this.setState({showingOptions: !this.state.showingOptions});
    }
  }

  updateSelectedValue(newVal) {
    const {updateFilter} = this.props;

    updateFilter(newVal);
  }

  render() {
    const {selectedValue, defaultValue, possibleOptions, klass} = this.props;
    let {showingOptions} = this.state;

    // Exclude selected value from the options
    let optionsToDisplay = possibleOptions.filter(option => {
      return option !== selectedValue;
    });

    return (
      <div className={classnames('dropdown-select-filter', klass)}
        tabIndex="1"
        onBlur={this.toggleOptionsDisplay.bind(this, {show: false})}
        onClick={this.toggleOptionsDisplay.bind(this)}>
          <div className={classnames('filter-label current-option',
            {active: selectedValue !== defaultValue})}>
            {selectedValue || defaultValue}
          </div>
          <ul className={classnames('dropdown-options-list list-unstyled',
            {hidden: !showingOptions})}>
            {
              optionsToDisplay.map((option, idx) => (
                <li className="dropdown-option"
                  onClick={this.updateSelectedValue.bind(this, option)}
                  key={idx}>
                  {option}
                </li>
              ))
            }
          </ul>
      </div>
    );
  }
}

export default DropdownSelectFilter;
