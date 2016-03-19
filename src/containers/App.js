import React, { Component } from 'react';
import styles from './App.css';
import Header from '../components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.body}>
        <Header />
        <div className={styles.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = { children: React.PropTypes.node };
