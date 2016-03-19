import React, { Component } from 'react';
import styles from './List.css';
import Item from './ListItem.js';

export default class List extends Component {
  renderItems() {
    const { issues } = this.props;
    return issues.map((issue, index)=> <Item key={index} {...issue}/>);
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

List.propTypes = {
  issues: React.PropTypes.array
};

List.defaultProps = {
  issues: [{
    id: 1023,
    subject: 'Story Title, flow to the next line',
    priority: 'High',
    release: '0.7.3',
    assign: 'Xiaoguang Chen',
    news: 'Lyra upload an image.',
    status: 1
  }]
};
