import React, { Component } from 'react';
import styles from './ListItem.css';
import Status from './Status.js';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    const { handleClick, id } = props;
    this.handleClick = handleClick.bind(null, id);
  }

  render() {
    const {
      id,
      subject,
      priority,
      release,
      assign,
      news,
      status
    } = this.props;
    return (
      <div data-ui-component='ListItem' onClick={this.handleClick} className={styles.tableRowWrapper}>
        <div className={styles.tableRow}>
          <div className={styles.tableRowItemColID}>{id}</div>
          <div className={styles.tableRowItem}>{subject}</div>
          <div className={styles.tableRowItemColPriority}>{priority}</div>
          <div className={styles.tableRowItemColRelease}>{release}</div>
          <div className={styles.tableRowItemColAssign}>{assign}</div>
        </div>
        <div className={styles.tableRowAdditionalInfo}>
          <div className={styles.tableRowItemColID}></div>
          <div className={styles.tableRowItemGrow3}>{news}</div>
          <div className={styles.tableRowItem}>
            <Status status={status} />
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  id: React.PropTypes.number,
  subject: React.PropTypes.string,
  priority: React.PropTypes.string,
  release: React.PropTypes.string,
  assign: React.PropTypes.string,
  news: React.PropTypes.string,
  status: React.PropTypes.number,
  handleClick: React.PropTypes.func
};
