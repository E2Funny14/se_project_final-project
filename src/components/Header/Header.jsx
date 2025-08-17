import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logoutIcon from "../../assets/logout.svg";
import closeIcon from "../../assets/close.svg";

function Header({
  isLoggedIn,
  currentUser,
  onLogout,
  isLoginModalOpen,
  isRegisterModalOpen,
  onLoginClick,
  onCloseModals,
}) {
  const location = useLocation();
  const isOnSavedNews = location.pathname === "/saved-news";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anyModalOpen = isLoginModalOpen || isRegisterModalOpen;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleHeaderCloseClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (anyModalOpen) onCloseModals();
  };

  const handleSignInClick = () => {
    closeMenu();
    onLoginClick();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header ${isOnSavedNews ? "header_saved" : ""} ${
        isMenuOpen ? "open" : ""
      } ${anyModalOpen ? "modal-open" : ""}`}
    >
      <h1 className="header__title">NewsExplorer</h1>
      <button
        className="header__menu-button"
        onClick={toggleMenu}
        aria-label="Menu"
      ></button>
      <button
        type="button"
        className="header__close-button"
        onClick={handleHeaderCloseClick}
        aria-label="Close"
      >
        <img src={closeIcon} alt="Close" className="header__close-icon" />
      </button>
      <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`header__button header__button_type_home ${
            location.pathname === "/" ? "header__button_active" : ""
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
                location.pathname === "/saved-news"
                  ? "header__button_active"
                  : ""
              }`}
              onClick={closeMenu}
            >
              Saved articles
            </Link>
            <button
              className="header__button header__button_type_logout"
              onClick={onLogout}
            >
              {currentUser?.name || "User"}
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
            onClick={handleSignInClick}
          >
            Sign in
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
