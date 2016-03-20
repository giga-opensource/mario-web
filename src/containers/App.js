import React, { Component } from 'react';
import styles from './App.css';
import Header from '../components/Header';
import Modals from './Modals';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-ui-component='App' className={styles.app}>
        {/* Header */}
        <Header />

        {/* Body */}
        <div data-ui-component='Body' className={styles.body}>
          {this.props.children}
        </div>
        <Modals />
      </div>
    );
  }
}

App.propTypes = { children: React.PropTypes.node };
