import React from 'react';

const MoreFiltersBtn = ({onMoreFilters, onLessFilters, canShowMore}) => {
  function handleClick() {
    if (canShowMore) {
      onMoreFilters();
    } else {
      onLessFilters();
    }
  }

  return (
    <div className="filter-label filter-action-label"
      onClick={handleClick}>
      {canShowMore ? 'More filters' : 'Less filters'}
    </div>
  );
};

export default MoreFiltersBtn;
