import React, { Component } from 'react';
import View from '../components/issue/View.js';
import List from '../components/issue/List.js';
import AddButton from '../components/issue/AddButton.js';

export default class Issues extends Component {
  constructor(props) {
    super(props);
  }

  renderFilters() {
    const { views } = this.props;
    return views.map((view, index) => <View key={index} {...view}/>);
  }

  render() {
    return (
      <div data-ui-component='Issues'>
        {this.renderFilters()}
        <List />
        <AddButton />
      </div>
    );
  }
}

Issues.propTypes = {
  views: React.PropTypes.array
};

Issues.defaultProps = {
  views: [{name: 'View 1'}, {name: 'View 2'}]
};
