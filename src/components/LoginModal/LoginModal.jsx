import { useState } from "react";
import "./LoginModal.css";
import closeIcon from "../../assets/close.svg";

function LoginModal({ isOpen, onClose, onRegisterClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      onLogin({ name: email.split('@')[0], email });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">Sign in</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label-email">
            Email
            <input
              type="email"
              className="modal__input"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="modal__label-password">
            Password
            <input
              type="password"
              className="modal__input"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className={`modal__submit ${!isFormValid ? 'modal__submit-disabled' : ''}`} disabled={!isFormValid}>
            Sign in
          </button>
        </form>
        <p className="modal__text">
          or <button className="modal__link" onClick={onRegisterClick}>Sign up</button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
