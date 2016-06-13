import React from 'react';

const UnselectAllButton = ({onUnselectAll}) => {
  return (
    <div className="filter-label filter-action-label" onClick={onUnselectAll}>
      Clear filters
    </div>
  );
};

export default UnselectAllButton;
