import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div data-ui-component='Header__container' className={styles.container}>
        {/* Logo */}
        <div data-ui-component='Header__logo' className={styles.logo}>
          Mario's Butterfly
        </div>

        {/* Project Name and Selector */}
        <div data-ui-component='Header__projectNameWrapper' className={styles.projectNameWrapper}>
          <div data-ui-component='Header__projectName' className={styles.projectName}>
            Project: Mario's Butterfly
          </div>
        </div>

        {/* User Info */}
        <div data-ui-component='Header__userInfo' className={styles.userInfo}>
          Stanton Wong
        </div>

      </div>
    );
  }
}
