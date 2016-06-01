import React from 'react';

import Filter from './filter.jsx';

class FilterGroup extends React.Component {
  getValue() {
    const {items} = this.props;
    let values = [];

    items.forEach((item, idx) => {
      let checked = this.refs[idx].getValue();

      if (checked) {
        values.push(item);
      }
    });

    return values;
  }

  render() {
    const {items} = this.props;

    return (
       <div className="filter-group">
         {
           items.map((item, idx) => {
             return <Filter label={item}
               ref={idx}
               key={idx} />;
           })
         }
       </div>
    );
  }
}

export default FilterGroup;
