import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const Filter = ({label, tooltipText, klass, isSelected, updateFilter}) => {
  function toggleSelected() {
    updateFilter(!isSelected);
  }

  const FilterComponent = (
    <div className={classnames('filter-label', klass, {active: isSelected})}
      onClick={toggleSelected}>
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
};

export default Filter;
