import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

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
    const {label, tooltipText} = this.props;
    const FilterComponent = (
      <div className={classnames('filter-label', {active: this.state.selected})}
        onClick={this.toggleSelected.bind(this)}>
        {label}
        <input type="checkbox" ref="filter" checked={this.state.selected} />
      </div>
    );

    if (tooltipText) {
      const tooltip = <Tooltip>{tooltipText}</Tooltip>;
      return (
        <OverlayTrigger
          overlay={tooltip} placement="bottom">
          {FilterComponent}
        </OverlayTrigger>
      );
    } else {
      return FilterComponent;
    }
  }
}

export default Filter;
