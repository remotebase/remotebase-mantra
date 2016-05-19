import React from 'react';

import SearchResult from '../containers/search_result';
import Filters from '../containers/filters';

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: {}};
  }

  changeQuery(query) {
    this.setState({query});
  }

  render() {
    let query = this.state.query;

    return (
      <div className="finder">
        <Filters changeQuery={this.changeQuery.bind(this)} />
        <SearchResult query={query} />
      </div>
    );
  }
}

export default Finder;
