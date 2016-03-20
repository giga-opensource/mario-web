import React, { Component } from 'react';
import View from '../components/issue/View.js';
import List from '../components/issue/List.js';
import AddButton from '../components/issue/AddButton.js';
import CreateView from '../components/issue/CreateView.js';

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
        
        {/* Filter View Tabs */}
        <div data-ui-component='View__tabs'>
          {this.renderFilters()}
        </div>
        
        {/* Add Filters and Create Views */}
        <CreateView />
        

        {/* List of Issues */}
        <List />

        {/* Fixed Add Issue Button */}
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
