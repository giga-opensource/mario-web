import React, { Component } from 'react';
import styles from './Status.css';

export default class Status extends Component {
  render() {
    const {
      status
    } = this.props;
    return (
      <div>
        {status}
      </div>
    );
  }
}

Status.propTypes = {
  status: React.PropTypes.number
};
