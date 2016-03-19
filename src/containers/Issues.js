import React, { Component } from 'react';
import Filter from '../components/issue/Filter.js';
import List from '../components/issue/List.js';

export default class Issues extends Component {
  constructor(props) {
    super(props);
  }

  renderFilters() {
    const { filters } = this.props;
    return filters.map((filter, index) => <Filter key={index} {...filter}/>);
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
        <List />
      </div>
    );
  }
}

Issues.propTypes = {
  filters: React.PropTypes.array
};

Issues.defaultProps = {
  filters: [{name: 'View 1'}, {name: 'View 2'}]
};
