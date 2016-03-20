import React, { Component } from 'react';
import styles from './View.css';

export default class View extends Component {
  render() {
    const { name } = this.props;
    return (
      <div data-ui-component='View' className={styles.viewTabButton}>
        {name}
      </div>
    );
  }
}

View.propTypes = {
  name: React.PropTypes.string
};
