import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Cookie from 'js-cookie';

const cookieName = 'remotebase-hideMockSubBtn';

class MockSubscribeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: Boolean(Cookie.get(cookieName))};
  }

  hide(e) {
    e.preventDefault();

    const {recordClick, company} = this.props;
    this.setState({hidden: true});
    recordClick('companySubscription', {companyName: company.name});
    Cookie.set(cookieName, 'yes');
  }

  render() {
    return (
      <li className="trait-item">
        <i className="fa fa-envelope fa-fw"></i>
        <span className="item-name">
          Subscribe for changes
          <OverlayTrigger
            overlay={<Tooltip>Get notified when the company profile changes (e.g. When they start hiring)</Tooltip>} placement="bottom">
            <span className="tooltip-trigger">[?]</span>
          </OverlayTrigger>
        </span>
        {
          this.state.hidden ? <div className="text-muted">This feature is not here yet. Thanks for your interest.</div> :
          <a href="#" onClick={this.hide.bind(this)}>Subscribe</a>
        }
      </li>
    );
  }
}

export default MockSubscribeButton;
