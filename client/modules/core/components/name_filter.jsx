import React from 'react';

class NameFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    const {updateFilter} = this.props;

    let name = this.refs.name.value;
    updateFilter(name);
  }

  render() {
    const {currentValue} = this.props;

    return (
      <div className="name-filter-container">
        <i className="fa fa-search"></i>
        <input type="text"
          className="name-filter"
          placeholder="Company name"
          ref="name"
          value={currentValue}
          onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default NameFilter;
