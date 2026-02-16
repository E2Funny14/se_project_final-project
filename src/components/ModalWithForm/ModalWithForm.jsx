import "./ModalWithForm.css";
import closeIcon from "../../assets/close.svg";

function ModalWithForm({
  isOpen,
  onClose,
  name,
  title,
  children,
  buttonText,
  onSubmit,
  isFormValid,
  linkText,
  onLinkClick,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className={`modal__submit ${
              !isFormValid ? "modal__submit-disabled" : ""
            }`}
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
        <p className="modal__text">
          or{" "}
          <button className="modal__link" onClick={onLinkClick}>
            {linkText}
          </button>
        </p>
      </div>
    </div>
  );
}

export default ModalWithForm;
