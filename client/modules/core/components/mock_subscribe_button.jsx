import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Cookie from 'js-cookie';
import classnames from 'classnames';

const cookieName = 'remotebase-hideMockSubBtn';

class MockSubscribeButton extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {hidden: Boolean(Cookie.get(cookieName))};
    this.state = {hidden: false};
  }

  hide(e) {
    e.preventDefault();

    const {recordClick, company} = this.props;
    this.setState({hidden: true});
    recordClick('companySubscription', {companyName: company.name});
    // Cookie.set(cookieName, 'yes');
  }

  render() {
    let klass = classnames('btn rb-btn-primary rb-btn-small', {'disabled': this.state.hidden});
    let tooltip = <Tooltip>Get notified when the company profile changes (e.g. When they start hiring)</Tooltip>;

    return (
      <button className={klass}
        onClick={this.hide.bind(this)}>
        {
          this.state.hidden ? 'Not here yet' :
          <OverlayTrigger
            overlay={tooltip} placement="left">
            <span className="tooltip-trigger">Subscribe</span>
          </OverlayTrigger>
        }
      </button>
    );
  }
}

export default MockSubscribeButton;
