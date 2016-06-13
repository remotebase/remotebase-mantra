import React from 'react';
import classnames from 'classnames';

import Filter from './filter.jsx';

const CommunicationFilters = ({communicationFilters, updateFilter}) => {
  function handleUpdate(key, val) {
    updateFilter(key, val);
  }

  return (
    <div className={classnames('filter-context-group')}>
      <h3 className="filter-definition">Communication</h3>

      <div className="hidden-sm-up">
        <div className="filter-group">
          <div className="filter-row">
            <Filter label="Slack"
              isSelected={communicationFilters.Slack}
              updateFilter={handleUpdate.bind(this)}
              filterKey="communication_methods.Slack" />
            <Filter label="Email"
              isSelected={communicationFilters.Email}
              updateFilter={handleUpdate.bind(this)}
              filterKey="communication_methods.Email" />
            <Filter label="Skype"
              isSelected={communicationFilters.Skype}
              updateFilter={handleUpdate.bind(this)}
              filterKey="communication_methods.Skype" />
          </div>
          <div className="filter-row">
            <Filter label="HipChat"
              isSelected={communicationFilters.HipChat}
              updateFilter={handleUpdate.bind(this)}
              filterKey="communication_methods.HipChat" />
          </div>
        </div>
      </div>

      <div className="hidden-sm-down">
        <div className="filter-group">
          <Filter label="Slack"
            isSelected={communicationFilters.Slack}
            updateFilter={handleUpdate.bind(this)}
            filterKey="communication_methods.Slack" />
          <Filter label="Email"
            isSelected={communicationFilters.Email}
            updateFilter={handleUpdate.bind(this)}
            filterKey="communication_methods.Email" />
          <Filter label="Skype"
            isSelected={communicationFilters.Skype}
            updateFilter={handleUpdate.bind(this)}
            filterKey="communication_methods.Skype" />
          <Filter label="HipChat"
            isSelected={communicationFilters.HipChat}
            updateFilter={handleUpdate.bind(this)}
            filterKey="communication_methods.HipChat" />
        </div>
      </div>
    </div>
  );
};

export default CommunicationFilters;
