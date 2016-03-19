import React, { Component } from 'react';
import styles from './View.css';

export default class View extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>{name}</div>
    );
  }
}

View.propTypes = {
  name: React.PropTypes.string
};
