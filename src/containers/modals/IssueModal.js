import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  modalClose
} from '../../actions/index';

class IssueModal extends Component {
  render() {
    const { issue, modalClose } = this.props;
    return (
      <div>
        <h2>{issue.subject}</h2>
        <button onClick={modalClose}>x close</button>
      </div>
    );
  }
}

IssueModal.propTypes = {
  issue: React.PropTypes.object,
  modalClose: React.PropTypes.func
};


function mapStateToProps(state, ownProps) {
  const { issues } = state;
  const { issueId } = ownProps;
  const issue = issues.find(item => item.id === issueId);
  return {
    issue
  };
}

export default connect(
  mapStateToProps,
  {
    modalClose
  }
)(IssueModal);
