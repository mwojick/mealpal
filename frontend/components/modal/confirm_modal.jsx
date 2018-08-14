import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

function ConfirmModal({ closeModal }) {
  let min = 1000,
    max = 10000;
  let rand4DigitNum = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div
      className="confirm-modal animated fadeInDown"
      onClick={e => e.stopPropagation()}
    >
      <div className="confirm-modal-top">
        <div />
        <div className="donut-forget">DONUT FORGET!</div>
        <div onClick={closeModal} className="confirm-modal-x">
          &times;
        </div>
      </div>

      <div className="confirm-modal-bottom">
        <div className="confirm-modal-text">
          <div>Show the shop this </div>
          <div>
            <span>order number</span> at pickup.
          </div>
        </div>
        <img
          className="confirm-ticket"
          src="https://res.cloudinary.com/mwojick/image/upload/v1534227185/TreatPal/icons/ticket.png"
        />
        <div className="confirm-number">{rand4DigitNum}</div>
        <div onClick={closeModal} className="sounds-good">
          SOUNDS GOOD
        </div>
      </div>
    </div>
  );
}

const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(ConfirmModal);
