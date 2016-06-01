import React from 'react';
import classnames from 'classnames';

import Filter from './filter.jsx';

const CommunicationFilters = ({communicationFilters, updateFilter, isShowing}) => {
  function handleUpdate(key, val) {
    updateFilter(key, val);
  }

  return (
    <div className={classnames({hidden: !isShowing})}>
      <div className="filter-definition">Communication methods</div>

        <div className="row">
          <div className="col-xs-12">
            <div className="hidden-sm-up">
              <div className="filter-group">
                <div className="filter-row">
                  <Filter label="Slack"
                    isSelected={communicationFilters.Slack}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.Slack')} />
                  <Filter label="Google Apps"
                    isSelected={communicationFilters.GoogleApps}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.GoogleApps')} />
                  <Filter label="Email"
                    isSelected={communicationFilters.Email}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.Email')} />
                  <Filter label="Skype"
                    isSelected={communicationFilters.Skype}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.Skype')} />
                </div>
                <div className="filter-row">
                  <Filter label="HipChat"
                    isSelected={communicationFilters.HipChat}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.HipChat')} />
                  <Filter label="Flowdock"
                    isSelected={communicationFilters.FlowDock}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.FlowDock')} />
                </div>
              </div>
            </div>

            <div className="hidden-sm-down">
              <div className="filter-group">
                <div className="filter-row">
                  <Filter label="Slack"
                    isSelected={communicationFilters.Slack}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.Slack')} />
                  <Filter label="Google Apps"
                    isSelected={communicationFilters.GoogleApps}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.GoogleApps')} />
                  <Filter label="Email"
                    isSelected={communicationFilters.Email}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.Email')} />
                  <Filter label="Skype"
                    isSelected={communicationFilters.Skype}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.Skype')} />
                  <Filter label="HipChat"
                    isSelected={communicationFilters.HipChat}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.HipChat')} />
                  <Filter label="Flowdock"
                    isSelected={communicationFilters.FlowDock}
                    updateFilter={handleUpdate.bind(this, 'communication_methods.FlowDock')} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CommunicationFilters;
