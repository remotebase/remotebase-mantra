import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';

const SearchButton = ({onSearch, filterSelection, lastSearchedFilter}) => {
  function handleSearch() {
    onSearch();
  }

  let isFilterDirty = !_.isEqual(filterSelection, lastSearchedFilter);
  let klass = classnames('btn search-btn', {'search-btn-flash': isFilterDirty});

  return (
    <button onClick={handleSearch}
      className={klass}>
      Find
    </button>
  );
};

export default SearchButton;
