import React, { Component } from 'react';
import Leftbar from '../components/Leftbar';
import styles from './App.css';
import bgUrl from 'file?name=[name]-[hash].[ext]!../images/bg.jpg';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.backgroundImage} style={{backgroundImage: `url(${bgUrl})`}} />
        <div className={styles.backgroundOverlay} />
        <Leftbar />
        <div className={styles.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = { children: React.PropTypes.node };
