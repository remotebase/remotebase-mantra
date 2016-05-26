import React from 'react';
import Cookie from 'js-cookie';

const cookieName = 'remotebase-doNotShowMailchimpBanner';

class MailchimpSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hidden: Boolean(Cookie.get(cookieName))};
  }

  handleSubscribe() {
    this.setState({hidden: true});
    Cookie.set(cookieName, 'yes');
  }

  render() {
    if (this.state.hidden) {
      return <span></span>;
    }

    return (
      <div className="mailchimp-banner">
        <div className="row">
          <form action="//remotebase.us13.list-manage.com/subscribe/post?u=7435b0b28de119d328c0583bb&amp;id=d21d3fc1f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate onSubmit={this.handleSubscribe.bind(this)}>
            <div className="col-xs-12 col-sm-6 cta">
              Get weekly digests of best remote companies and jobs.
            </div>
            <div className="col-xs-12 col-sm-3">
              <input type="email" name="EMAIL" className="form-control" placeholder="Email" required />
            </div>
            <div className="col-xs-12 col-sm-2">
              <input type="submit" value="Subscribe" className="btn signup-btn" />
            </div>

            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px', ariaHidden:'true'}}>
              <input type="text" name="b_7435b0b28de119d328c0583bb_d21d3fc1f9" tabIndex="-1" value="" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MailchimpSignup;
