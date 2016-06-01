import React from 'react';

const LoadMoreButton = ({onLoadMore}) => {
  function handleLoadMore() {
    onLoadMore();
  }

  return <button className="btn rb-btn-primary" onClick={handleLoadMore}>Load more</button>;
};

export default LoadMoreButton;
