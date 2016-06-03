import React from 'react';
import Filter from './filter.jsx';

const FilterTeamSize = ({updateFilter, filterSelection}) => {
  return (
    <div className="filter-group team-size-filter">
      <Filter label="< 10"
        updateFilter={updateFilter}
        filterKey="team_size.lt10"
        klass="filter-lt10"
        isSelected={filterSelection.team_size.lt10}
        mutuallyExclusiveFilters={[
          'team_size.gte10lte25', 'team_size.gte25lte50', 'team_size.gt50'
        ]} />
      <Filter label="10 ~ 25"
        updateFilter={updateFilter}
        filterKey="team_size.gte10lte25"
        isSelected={filterSelection.team_size.gte10lte25}
        mutuallyExclusiveFilters={[
          'team_size.lt10', 'team_size.gte25lte50', 'team_size.gt50'
        ]} />
      <Filter label="25~50"
        updateFilter={updateFilter}
        filterKey="team_size.gte25lte50"
        isSelected={filterSelection.team_size.gte25lte50}
        mutuallyExclusiveFilters={[
          'team_size.gte10lte25', 'team_size.lt10', 'team_size.gt50'
        ]} />
      <Filter label="> 50"
        updateFilter={updateFilter}
        filterKey="team_size.gt50"
        klass="filter-gt50"
        isSelected={filterSelection.team_size.gt50}
        mutuallyExclusiveFilters={[
          'team_size.gte10lte25', 'team_size.gte25lte50', 'team_size.lt10'
        ]} />
    </div>
  );
};

export default FilterTeamSize;
