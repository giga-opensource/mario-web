import React, { Component } from 'react';
import styles from './CreateView.css';

export default class CreateView extends Component {
  render() {
    return (
      <div data-ui-component='CreateView' className={styles.container}>

        {/* Sort */}
        <div className={styles.sortContainer}>
          <span>Sort:</span>
          <button>+ Add</button>
        </div>

        {/* Filter */}
        <div className={styles.filterContainer}>
          <span>Filter:</span>
          <button>+ Add</button>
        </div>

        {/* Button */}
        <div className={styles.createViewButton}>
          Create View
        </div>

      </div>
    );
  }
}
