import React from 'react';
import Filter from './filter.jsx';

class CommunicationFilters extends React.Component {
  getValue() {
    let values = [];
    let selection = {
      slack: this.refs.slack.getValue(),
      googleApps: this.refs.googleApps.getValue(),
      hipchat: this.refs.hipchat.getValue(),
      flowdock: this.refs.flowdock.getValue(),
      email: this.refs.email.getValue(),
      skype: this.refs.skype.getValue(),
    };

    selection.forEach((val, key) => {
      if (val === true) {
        values.push(key);
      }
    });

    return values;
  }

  render() {
    return (
       <div className="filter-group">
         <Filter label="Slack" ref="slack" />
         <Filter label="Google Apps" ref="googleApps" />
         <Filter label="HipChat" ref="hipchat" />
         <Filter label="Flowdock" ref="flowdock" />
         <Filter label="Email" ref="email" />
         <Filter label="Skype" ref="skype" />
       </div>
    );
  }
}

export default CommunicationFilters;
