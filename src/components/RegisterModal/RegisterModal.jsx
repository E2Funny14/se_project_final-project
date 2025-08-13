import { useState } from "react";
import "./RegisterModal.css";
import closeIcon from "../../assets/close.svg";

function RegisterModal({ isOpen, onClose, onLoginClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isFormValid = email && password && username;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      onRegister({ name: username, email });
      setEmail("");
      setPassword("");
      setUsername("");
      onClose();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">Sign up</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label">
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
          <label className="modal__label">
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
          <label className="modal__label">
            Username
            <input
              type="text"
              className="modal__input"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <button 
            type="submit" 
            className={`modal__submit ${!isFormValid ? 'modal__submit-disabled' : ''}`}
            disabled={!isFormValid}
          >
            Sign up
          </button>
        </form>
        <p className="modal__text">
          or <button className="modal__link" onClick={onLoginClick}>Sign in</button>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;