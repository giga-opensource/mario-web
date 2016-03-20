import React, { Component } from 'react';
import styles from './Header.css';
import Button from 'react-toolbox/lib/button';
import Avatar from 'react-toolbox/lib/avatar';

export default class Header extends Component {
  render() {
    return (
      <div data-ui-component='Header__container' className={styles.container}>
        {/* Logo */}
        <div data-ui-component='Header__logo' className={styles.logo}>
          Mario Butterfly
        </div>

        {/* Project Name and Selector */}
        <div data-ui-component='Header__projectNameWrapper' className={styles.projectNameWrapper}>
          <div data-ui-component='Header__projectName' className={styles.projectName}>
            Project: Mario's Butterfly
          </div>
        </div>

        {/* User Info */}
        <div data-ui-component='Header__userInfo' className={styles.userInfo}>
          <Avatar />
          <span>Stanton Wong</span>
        </div>

      </div>
    );
  }
}
