import React from 'react';
import classnames from 'classnames';

import {pathFor} from '/client/modules/core/libs/helpers';

const SubscriptionDashboardMenu = ({section, navigateToSection}) => {

  function handleSectionChange(newSection, e) {
    e.preventDefault();
    navigateToSection(newSection);
  }

  return (
    <div className="list-group">
      <a href={pathFor('mySubscriptions')}
        className={classnames('list-group-item', {active: section === 'subscribed'})}
        onClick={handleSectionChange.bind(this, 'subscribed')}>
        Subscribed
      </a>
      <a href={pathFor('mySubscriptions', {section: 'subscribed'})}
        className={classnames('list-group-item', {active: section === 'notification_methods'})}
        onClick={handleSectionChange.bind(this, 'notification_methods')}>
        Notification methods
      </a>
    </div>
  );
};

export default SubscriptionDashboardMenu;
