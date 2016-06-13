import React from 'react';

class NameFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    const {currentValue} = this.props;

    if (currentValue === '') {
      this.refs.name.value = '';
    }
  }

  handleChange() {
    const {updateFilter} = this.props;

    let name = this.refs.name.value;
    updateFilter(name);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleChange();
    }
  }

  render() {
    const {currentValue} = this.props;

    return (
      <div className="name-filter-container">
        <i className="fa fa-search"></i>
        <input type="text"
          className="filter-label name-filter"
          placeholder="Company name"
          ref="name"
          defaultValue={currentValue}
          onBlur={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)} />
      </div>
    );
  }
}

export default NameFilter;
