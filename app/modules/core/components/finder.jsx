import React from 'react';

import SearchResult from '../containers/search_result';
import Filters from '../containers/filters';

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: {}, limit: 30};
  }

  changeQuery(query) {
    this.setState({query});
  }

  handleLoadMore(done) {
    const {companyResultCount} = this.props;
    let currentLimit = this.state.limit;

    if (currentLimit < companyResultCount) {
      this.setState({limit: currentLimit + 30});
    }

    if (done) {
      done();
    }
  }

  render() {
    const {companyResultCount} = this.props;
    let {query, limit} = this.state;

    return (
      <div className="finder">
        <Filters changeQuery={this.changeQuery.bind(this)} />
        <SearchResult query={query}
          limit={limit}
          onLoadMore={this.handleLoadMore.bind(this)}
          searchResultCount={companyResultCount}
          currentLimit={limit} />
      </div>
    );
  }
}

export default Finder;
