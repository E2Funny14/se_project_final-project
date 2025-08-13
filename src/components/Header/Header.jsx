import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import logoutIcon from "../../assets/logout.svg";
import closeIcon from "../../assets/close.svg";

function Header({ isLoggedIn, setIsLoggedIn, currentUser, onLogin, onLogout }) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const location = useLocation();
  const isOnSavedNews = location.pathname === '/saved-news';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anyModalOpen = isLoginModalOpen || isRegisterModalOpen;

  useEffect(() => {
  setIsMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleHeaderCloseClick = () => {
    // close menu or any open modal
    setIsMenuOpen(false);
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleLoginClick = () => {
    setIsMenuOpen(false);
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
  };

  const handleRegisterClick = () => {
    setIsMenuOpen(false);
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
  };

  const handleCloseModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleLogin = (userData) => {
    onLogin(userData);
    handleCloseModals();
  };

  const handleLogout = () => {
    onLogout();
  };

  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <header className={`header ${isOnSavedNews ? 'header_saved' : ''} ${isMenuOpen ? 'open' : ''} ${anyModalOpen ? 'modal-open' : ''}`}>
      <h1 className="header__title">NewsExplorer</h1>
      <button 
        className="header__menu-button" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
      </button>
      <button
        type="button"
        className="header__close-button"
        onClick={handleHeaderCloseClick}
        aria-label="Close"
      >
        <img src={closeIcon} alt="Close" className="header__close-icon" />
      </button>
      <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <Link 
          to="/" 
          className={`header__button header__button_type_home ${
            location.pathname === '/' ? 'header__button_active' : ''
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link 
              to="/saved-news" 
              className={`header__button header__button_type_home ${
                location.pathname === '/saved-news' ? 'header__button_active' : ''
              }`}
            >
              Saved articles
            </Link>
            <button 
              className="header__button header__button_type_logout"
              onClick={handleLogout}
            >
              {currentUser?.name || 'User'}
              <img 
                src={logoutIcon} 
                alt="Logout" 
                className="header__logout-icon" 
              />
            </button>
          </>
        ) : (
          <button
            className="header__button header__button_type_signin"
            onClick={handleLoginClick}
          >
            Sign in
          </button>
        )}
      </nav>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModals}
        onRegisterClick={handleRegisterClick}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseModals}
        onLoginClick={handleLoginClick}
      />
    </header>
  );
}

export default Header;