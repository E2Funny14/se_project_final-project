import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="success"
      title="Registration successfully completed!"
      buttonText="Sign in"
      onSubmit={(e) => {
        e.preventDefault();
        onLoginClick();
      }}
      isFormValid={true}
    />
  );
}

export default SuccessModal;