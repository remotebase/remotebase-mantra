import React from 'react';

import SearchResult from '../containers/search_result';
import LoadMoreBtn from '../containers/load_more_button';
import Loading from '../containers/loading';

class SearchEngine extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLoadMore() {
    const {onLoadMore} = this.props;
    onLoadMore();
  }

  render() {
    const {searchResultCount, currentLimit, isSearching} = this.props;

    return (
      <div className="search-result">
        <SearchResult isSearching={isSearching} />
        {
          isSearching ? <Loading /> : <span>Not loading</span>
        }
        {
          currentLimit < searchResultCount && !isSearching ?
          <LoadMoreBtn onLoadMore={this.handleLoadMore.bind(this)}/> : <span></span>
        }
      </div>
    );
  }
}

export default SearchEngine;
