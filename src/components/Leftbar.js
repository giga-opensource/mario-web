import React, { Component } from 'react';
import styles from './Leftbar.css';

export default class Leftbar extends Component {
  render() {
    return (
      <div className={styles.leftbar}>
        <div className={styles.item}>
          <div className={styles.itemText}>
            ---
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemText}>
            Issues
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemText}>
            Channels
          </div>
        </div>
      </div>
    );
  }
}
