import React from 'react';
import classnames from 'classnames';

import Filter from './filter.jsx';

const CollaborationFilters = ({updateFilter, collaborationFilters, isShowing}) => {
  function handleUpdate(key, val) {
    updateFilter(key, val);
  }

  return (
    <div className={classnames('filter-context-group', {hidden: !isShowing})}>
      <h3 className="filter-definition">Collaboration</h3>

        <div className="row">
          <div className="col-xs-12">
            <div className="hidden-sm-up">
              <div className="filter-group">
                <div className="filter-row">
                  <Filter label="Blossom"
                    isSelected={collaborationFilters.Blossom}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Blossom')} />
                  <Filter label="Basecamp"
                    isSelected={collaborationFilters.Basecamp}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Basecamp')} />
                  <Filter label="iDoneThis"
                    isSelected={collaborationFilters.iDoneThis}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.iDoneThis')} />
                  <Filter label="Trello"
                    isSelected={collaborationFilters.Trello}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Trello')} />
                </div>
                <div className="filter-row">
                  <Filter label="Trello"
                    isSelected={collaborationFilters.Trello}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Trello')} />
                  <Filter label="Google Apps"
                    isSelected={collaborationFilters.GoogleApps}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.GoogleApps')} />
                </div>
              </div>
            </div>

            <div className="hidden-sm-down">
              <div className="filter-group">
                <div className="filter-row">
                  <Filter label="Blossom"
                    isSelected={collaborationFilters.Blossom}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Blossom')} />
                  <Filter label="Basecamp"
                    isSelected={collaborationFilters.Basecamp}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Basecamp')} />
                  <Filter label="iDoneThis"
                    isSelected={collaborationFilters.iDoneThis}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.iDoneThis')} />
                  <Filter label="Trello"
                    isSelected={collaborationFilters.Trello}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.Trello')} />
                  <Filter label="Google Apps"
                    isSelected={collaborationFilters.GoogleApps}
                    updateFilter={handleUpdate.bind(this, 'collaboration_methods.GoogleApps')} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CollaborationFilters;
