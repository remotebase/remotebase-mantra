import React from 'react';
import classnames from 'classnames';

const FilterTeamSize = ({updateFilter, selectedValue}) => {
  function handleSelect(val) {
    let newVal;

    if (selectedValue === val) {
      newVal = null;
    } else {
      newVal = val;
    }

    updateFilter(newVal);
  }

  return (
    <div className="radio-filter team-size-filter">
      <div className={classnames('filter-label filter-lt10', {active: selectedValue === 'lt10'})}
        onClick={handleSelect.bind(this, 'lt10')}>
        &lt; 10
      </div>
      <div className={classnames('filter-label', {active: selectedValue === 'tenToFifty'})}
        onClick={handleSelect.bind(this, 'tenToFifty')}>
        10 ~ 50
      </div>
      <div className={classnames('filter-label', {active: selectedValue === 'fiftyToHundred'})}
        onClick={handleSelect.bind(this, 'fiftyToHundred')}>
        50 ~ 100
      </div>
      <div className={classnames('filter-label filter-gt100', {active: selectedValue === 'gt100'})}
        onClick={handleSelect.bind(this, 'gt100')}>
        &gt; 100
      </div>
    </div>
  );
}

export default FilterTeamSize;
