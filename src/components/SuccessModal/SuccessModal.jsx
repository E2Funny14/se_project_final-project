import React from "react";
import "./SuccessModal.css";
import closeIcon from "../../assets/close.svg";

function SuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <div className={`modal modal_type_success${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">Registration successfully completed!</h2>
        <button className="modal__link" onClick={onLoginClick}>Sign in</button>
      </div>
    </div>
  );
}

export default SuccessModal;