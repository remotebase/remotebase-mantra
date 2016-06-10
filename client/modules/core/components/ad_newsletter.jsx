import React from 'react';
import cookies from 'js-cookie';

const cookieName = 'remotebase-doNotShowMailchimpBanner';

class AdNewsLetter extends React.Component {
  constructor(props) {
    super(props);
    let shouldHideBanner = Boolean(cookies.get(cookieName));
    this.state = {shouldHideBanner};
  }

  hideBanner() {
    cookies.set(cookieName, 'YES');
    this.setState({shouldHideBanner: true});
  }

  render() {
    if (this.state.shouldHideBanner) {
      return <span></span>;
    }

    return (
      <li className="col-xs-12">
        <div className="mailchimp-banner">
          <form action="//remotebase.us13.list-manage.com/subscribe/post?u=7435b0b28de119d328c0583bb&amp;id=d21d3fc1f9"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate row"
            target="_blank"
            noValidate
            onSubmit={this.hideBanner.bind(this)}>
              <div className="col-xs-12 col-sm-7 cta">
                <div className="hidden-sm-down">
                  Latest in remote companies and jobs, delivered monthly
                </div>
                <div className="hidden-sm-up">
                  Get RemoteBase monthly.
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="input-group">
                  <input type="email" name="EMAIL" className="form-control" placeholder="Email" />
                  <span className="input-group-btn">
                    <input type="submit" value="Subscribe" className="btn btn-secondary" />
                  </span>
                </div>
              </div>

              {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{position: 'absolute', left: '-5000px', ariaHidden:'true'}}>
                <input type="text" name="b_7435b0b28de119d328c0583bb_d21d3fc1f9" tabIndex="-1" value="" />
              </div>
          </form>
        </div>
      </li>
    );
  }
}

export default AdNewsLetter;
