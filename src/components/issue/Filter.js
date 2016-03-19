import React, { Component } from 'react';
import styles from './Filter.css';

export default class Filter extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>{name}</div>
    );
  }
}

Filter.propTypes = {
  name: React.PropTypes.string
};
