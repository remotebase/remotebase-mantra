import React from 'react';

import CompanyList from '../containers/company_list';
import LoadMoreBtn from '../containers/load_more_button';
import Loading from '../containers/loading';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLoadMore() {
    const {onLoadMore, loadMore} = this.props;
    loadMore();
    onLoadMore();
  }

  render() {
    const {searchResultCount, limit, companies, isSearching} = this.props;

    return (
      <div className="search-result">
        <div className="counter">{searchResultCount} companies found</div>
        <CompanyList companies={companies} />
        {
          isSearching ? <Loading /> : <span></span>
        }
        {
          limit < searchResultCount && !isSearching ?
          <LoadMoreBtn onLoadMore={this.handleLoadMore.bind(this)}/> : <span></span>
        }
      </div>
    );
  }
}

export default SearchResult;
