import React from 'react';

import CompanyList from '../containers/company_list';

const SearchResult = ({companies}) => (
  <div className="search-result">
    <div className="row">
      <div className="col-xs-12">
        <div className="counter">
          {companies.length} companies found
        </div>
      </div>
    </div>
    <CompanyList companies={companies} />
  </div>
);

export default SearchResult;
