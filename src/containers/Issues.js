import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from '../components/issue/View.js';
import List from '../components/issue/List.js';
import AddButton from '../components/issue/AddButton.js';
import CreateView from '../components/issue/CreateView.js';
import {
  viewsFetch,
  issuesFetch
} from '../actions/index';

function renderViews(views) {
  return views.map((view, index) => <View key={index} {...view}/>);
}

class Issues extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      viewsFetch,
      issuesFetch
    } = this.props;
    viewsFetch();
    issuesFetch();
  }

  render() {
    const { issues, views } = this.props;
    return (
      <div>
        {renderViews(views)}
        <List issues={issues}/>
        <AddButton />
        <CreateView />
      </div>
    );
  }
}

Issues.propTypes = {
  views: React.PropTypes.array,
  issues: React.PropTypes.array,
  viewsFetch: React.PropTypes.func,
  issuesFetch: React.PropTypes.func
};

function mapStateToProps(state) {
  const { views, issues } = state;
  return {
    views,
    issues,
  };
}

export default connect(
  mapStateToProps,
  {
    viewsFetch,
    issuesFetch
  }
)(Issues);
