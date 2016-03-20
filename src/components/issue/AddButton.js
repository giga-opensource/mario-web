import React, { Component } from 'react';
import styles from './AddButton.css';

export default class AddButton extends Component {
  render() {
    return (
      <div data-ui-component='AddButton' className={styles.button}>+</div>
    );
  }
}
