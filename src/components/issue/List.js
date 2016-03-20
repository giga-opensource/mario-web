import React, { Component } from 'react';
import styles from './List.css';
import Item from './ListItem.js';
import IssueModal from '../../containers/modals/IssueModal.js';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.handleOpenIssue = this.handleOpenIssue.bind(this);
  }

  handleOpenIssue(issueId) {
    const { modalOpen } = this.props;
    const modalContent = () => {
      return (
        <IssueModal issueId={issueId} />
      );
    };
    modalOpen(modalContent);
  }

  renderItems() {
    const { issues } = this.props;
    return issues.map((issue, index)=> <Item key={index} {...issue} handleClick={this.handleOpenIssue}/>);
  }

  render() {
    return (
      <div data-ui-component='List' className={styles.table}>
        {/* Table Header */}
        <div className={styles.tableRow + ' ' + styles.tableHeader}>
          <div className={styles.tableRowItemColID}>#</div>
          <div className={styles.tableRowItem}>Subject</div>
          <div className={styles.tableRowItemColPriority}>Priority</div>
          <div className={styles.tableRowItemColRelease}>Release</div>
          <div className={styles.tableRowItemColAssign}>Assign</div>
        </div>

        {/* Table Body */}
        {this.renderItems()}
      </div>
    );
  }
}

List.propTypes = {
  issues: React.PropTypes.array,
  modalOpen: React.PropTypes.func,
};
