import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onLoginClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isFormValid = email && password && username;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    onRegister({ name: username, email });
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="register"
      title="Sign up"
      buttonText="Sign up"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      linkText="Sign in"
      onLinkClick={onLoginClick}
    >
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
    </ModalWithForm>
  );
}

export default RegisterModal;
