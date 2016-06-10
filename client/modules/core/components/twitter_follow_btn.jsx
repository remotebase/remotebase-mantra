import React from 'react';

class TwitterFollowBtn extends React.Component {
  render() {
    return (
      <div className="follow-btn-container">
        <a href="https://twitter.com/remotebase"
          className="twitter-follow-button"
          data-show-count="false"
          data-size="large">
          Follow @remotebase
        </a>
      </div>
    );
  }
}

export default TwitterFollowBtn;
