import React, { Component } from 'react';
import styles from './List.css';
import Item from './ListItem.js';
import IssueModal from '../../containers/modals/IssueModal.js';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.handleOpenIssue = this.handleOpenIssue.bind(this);
  }

  handleOpenIssue(issueId) {
    const { modalOpen } = this.props;
    const modalContent = () => {
      return (
        <IssueModal issueId={issueId} />
      );
    };
    modalOpen(modalContent);
  }

  renderItems() {
    const { issues } = this.props;
    return issues.map((issue, index)=> <Item key={index} {...issue} handleClick={this.handleOpenIssue}/>);
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
  issues: React.PropTypes.array,
  modalOpen: React.PropTypes.func,
};
