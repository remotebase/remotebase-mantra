import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  toggleSelected() {
    const {updateFilter} = this.props;
    let toggledState = !this.state.selected;

    this.setState({selected: toggledState});

    if (updateFilter) {
      updateFilter(toggledState);
    }
  }

  render() {
    const {label, tooltipText, klass} = this.props;
    const FilterComponent = (
      <div className={classnames('filter-label', klass, {active: this.state.selected})}
        onClick={this.toggleSelected.bind(this)}>
        {label}
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
