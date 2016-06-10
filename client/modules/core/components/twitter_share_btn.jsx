import React from 'react';

// data-url="https://remotebase.io/ghost"
// data-text="I just updated my profile on @remotebase. Do you #remotework? Join us there"

class TwitterShareBtn extends React.Component {
  componentDidMount() {
    window.twttr.widgets.load(); // twtter widget is loaded in <head>
  }

  render() {
    const {dataUrl, dataText} = this.props;

    return (
      <div>
        <a href="https://twitter.com/share"
          className="twitter-share-button"
          data-url={dataUrl}
          data-text={dataText}>
          Tweet
        </a>

      </div>
    );
  }
}

export default TwitterShareBtn;
