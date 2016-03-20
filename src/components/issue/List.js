import React, { Component } from 'react';
import styles from './List.css';
import Item from './ListItem.js';
import IssueModal from './IssueModal.js';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.getOpenIssue = this.getOpenIssue.bind(this);
    this.handleOpenIssue = this.handleOpenIssue.bind(this);
    this.state = { openIssueId: null };
  }

  getOpenIssue(openIssueId) {
    const { issues } = this.props;
    return issues.find(item => item.id === openIssueId);
  }

  handleOpenIssue(openIssueId) {
    this.setState({openIssueId: openIssueId});
  }

  closeModal() {
    this.setState({openIssueId: null});
  }

  renderItems() {
    const { issues } = this.props;
    return issues.map((issue, index)=> <Item key={index} {...issue} handleClick={this.handleOpenIssue}/>);
  }

  render() {
    const { openIssueId } = this.state;
    return (
      <div>
        {this.renderItems()}
        {
          openIssueId &&
          <IssueModal
            openIssueId={openIssueId}
            getOpenIssue={this.getOpenIssue}
            closeModal={this.closeModal}
          />
        }
      </div>
    );
  }
}

List.propTypes = {
  issues: React.PropTypes.array
};
