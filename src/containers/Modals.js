/*
 * NOTE: We are using a modified version of React Modal.
 * ==============================================================
 *
 *  The reason we modify is that we don't want the default styles
 *  of modal content. We can revert to the official version of
 *  React Modal when following issue resolved:
 *  https://github.com/rackt/react-modal/issues/74
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { modalClose } from '../actions/index';

Modal.setAppElement('#app-modals');

const customStyles = {
  overlay: {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  content: {
    outline: 'none'
  }
};

class Modals extends Component {
  render() {
    const { modals, modalClose } = this.props;
    const isOpen = !!modals.items.length;
    const openingModal = modals.items[modals.items.length - 1];
    return (
      <Modal
        className="Modal__Bootstrap"
        overlayClassName="modal fade in"
        style={customStyles}
        closeTimeoutMS={150}
        isOpen={isOpen}
        onRequestClose={modalClose}
      >
        {openingModal && openingModal()}
      </Modal>
    );
  }
}

Modals.propTypes = {
  modals: React.PropTypes.object,
  modalClose: React.PropTypes.func,
};

function mapStateToProps(state) {
  const { modals } = state.ui;
  return {
    modals
  };
}

export default connect(
  mapStateToProps,
  { modalClose }
)(Modals);
