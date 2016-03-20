import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  modalClose
} from '../../actions/index';
import styles from './IssueModal.css';

class IssueModal extends Component {
  render() {
    const { issue, modalClose } = this.props;
    return (
      <div data-ui-component='IssueModal' className={styles.container}>
        {/* Close Button */}
        <div onClick={modalClose} className={styles.closeButton}>x</div>

        {/* Story Title */}
        <div>
          <h2>{issue.subject}</h2>
        </div>

        {/* IssueModal Properties */}
        <div data-ui-component='IssueModa__properties' className={styles.propertiesWrapper}>

          {/* Release */}
          <div className={styles.properties}>
            <div>
              <div className={styles.propertiesHeader}>Release</div>
              <div className={styles.propertiesContent}>ReleaseDropdown</div>
            </div>
          </div>

          {/* Priority */}
          <div className={styles.properties}>
            <div>
              <div>Priority</div>
              <div>PriorityDropdown</div>
            </div>
          </div>

          {/* Assignee */}
          <div className={styles.properties}>
            <div>
              <div>Assignee</div>
              <div>AssigneeDropdown</div>
            </div>
          </div>

          {/* Status */}
          <div className={styles.propertiesGrow2}>
            <div>
              <div>Status</div>
              <div>StatusSelector</div>
            </div>
          </div>
        </div>

        {/* Descrition */}
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>Description</h2>
        </div>

        {/* Uploads */}
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>Uploads</h2>
        </div>

        {/* Checklists */}
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>Checklists</h2>
        </div>

        {/* Comments Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>Comments</h2>
        </div>
        
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
