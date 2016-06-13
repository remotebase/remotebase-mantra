import React from 'react';

import Menu from '../containers/subscription_dashboard_menu';
import SubscribedTab from '../containers/subscribed_tab';
import NotificationMethodsTab from '../containers/notification_methods_tab';

class SubscriptionDashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {section: 'subscribed'};
  }

  handleUnsubscribe(companyId, e) {
    e.preventDefault();

    const {unsubscribeFromCompany} = this.props;
    unsubscribeFromCompany(companyId);
  }

  handleSectionChange(section) {
    this.setState({section});
  }

  render() {
    const {companies, user} = this.props;
    let {section} = this.state;

    return (
      <div className="container">
        <div className="row subscription-dashboard">
          <div className="col-xs-12 col-sm-3">
            <Menu section={section}
              navigateToSection={this.handleSectionChange.bind(this)} />
          </div>
          <div className="col-xs-12 col-sm-9">
            <SubscribedTab isActive={section === 'subscribed'}
              companies={companies}
              handleUnsubscribe={this.handleUnsubscribe.bind(this)} />
            <NotificationMethodsTab isActive={section === 'notification_methods'}
              user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionDashboardView;
