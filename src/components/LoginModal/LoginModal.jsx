import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onRegisterClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    onLogin({ name: email.split("@")[0], email });
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="login"
      title="Sign in"
      buttonText="Sign in"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      linkText="Sign up"
      onLinkClick={onRegisterClick}
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
    </ModalWithForm>
  );
}

export default LoginModal;
