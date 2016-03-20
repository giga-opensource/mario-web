import React, { Component } from 'react';
import Modal from 'react-modal';

export default class IssueModal extends Component {
  render() {
    const { closeModal, openIssueId, getOpenIssue } = this.props;
    const issue = getOpenIssue(openIssueId);
    return (
      <Modal
        isOpen
        onRequestClose={closeModal}>

        <h2>{issue.subject}</h2>
        <button onClick={closeModal}>x close</button>
      </Modal>
    );
  }
}

IssueModal.propTypes = {
  openIssueId: React.PropTypes.number,
  closeModal: React.PropTypes.func,
  getOpenIssue: React.PropTypes.func
};
