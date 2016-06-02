import React from 'react';
import classnames from 'classnames';

const UnselectAllButton = ({onUnselectAll, klass}) => {
  let buttonClass = classnames('btn rb-btn-primary unselect-all-btn', klass);

  return (
    <button className={buttonClass} onClick={onUnselectAll}>
      Clear filters
    </button>
  );
};

export default UnselectAllButton;
