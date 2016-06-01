import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';

const SearchButton = ({onSearch, filterSelection, lastSearchedFilter, klass}) => {
  function handleSearch() {
    onSearch();
  }

  let isFilterDirty = !_.isEqual(filterSelection, lastSearchedFilter);
  let btnClass = classnames('btn rb-btn-secondary search-btn', klass, {'rb-btn-flash': isFilterDirty});

  return (
    <button onClick={handleSearch}
      className={btnClass}>
      Find
    </button>
  );
};

export default SearchButton;
