import React, { Component } from 'react';
import styles from './ListItem.css';
import Status from './Status.js';

export default class ListItem extends Component {
  render() {
    const {
      id,
      subject,
      priority,
      release,
      assign,
      news,
      status
    } = this.props;
    return (
      <div>
        {id}
        {subject}
        {priority}
        {release}
        {assign}
        {news}
        <Status status={status} />
      </div>
    );
  }
}

ListItem.propTypes = {
  id: React.PropTypes.number,
  subject: React.PropTypes.string,
  priority: React.PropTypes.string,
  release: React.PropTypes.string,
  assign: React.PropTypes.string,
  news: React.PropTypes.string,
  status: React.PropTypes.number
};
