import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

function ConfirmModal({ closeModal }) {


  return (
    <div className="confirm-modal animated fadeInDown" onClick={e => e.stopPropagation()}>

      <div onClick={closeModal} className="">SOUNDS GOOD</div>
    </div>
  );
}

const msp = (state) => {
  return {
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ConfirmModal);