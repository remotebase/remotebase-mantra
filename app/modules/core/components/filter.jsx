import React from 'react';
import classnames from 'classnames';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  // Public method called by <Filters> component to get the value of the input
  getValue() {
    return this.refs.filter.checked;
  }

  toggleSelected() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    const {label} = this.props;

    return (
      <div className={classnames('filter-label', {active: this.state.selected})}
        onClick={this.toggleSelected.bind(this)}>
        {label}
        <input type="checkbox" ref="filter" checked={this.state.selected} />
      </div>
    );
  }
}

export default Filter;
