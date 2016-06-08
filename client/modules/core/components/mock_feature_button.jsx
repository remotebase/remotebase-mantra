import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import classnames from 'classnames';

class MockFeatureButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: false};
  }

  hide(e) {
    e.preventDefault();

    const {recordClick, targetName, targetMeta} = this.props;
    this.setState({hidden: true});
    recordClick(targetName, targetMeta || {});
  }

  render() {
    let klass = classnames('btn rb-btn-primary rb-btn-small', {disabled: this.state.hidden});
    const {buttonTxt} = this.props;

    return (
      <button className={klass}
        onClick={this.hide.bind(this)}>
        {
          this.state.hidden ? 'Not here yet' : buttonTxt
        }
      </button>
    );
  }
}

export default MockFeatureButton;
