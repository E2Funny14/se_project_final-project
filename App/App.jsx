import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import SearchForm from "../src/components/SearchForm/SearchForm";
import NewsCardList from "../src/components/NewsCardList/NewsCardList";
import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import SavedNews from "../src/components/SavedNews/SavedNews";
import LoginModal from "../src/components/LoginModal/LoginModal";
import RegisterModal from "../src/components/RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginClick = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  const handleCloseModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleSearchResults = (articles) => {
    setSearchResults(articles);
    setSearchError(articles.length === 0 ? "NOT_FOUND" : null);
  };

  const handleSearchStart = () => {
    setIsLoading(true);
    setSearchError(null);
  };

  const handleSearchError = (error) => {
    setSearchError(error);
    setSearchResults([]);
  };

  const handleSearchComplete = () => {
    setIsLoading(false);
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      handleLoginClick();
      return;
    }
    setSavedArticles([...savedArticles, article]);
  };

  const handleRemoveArticle = (articleToRemove) => {
    setSavedArticles(
      savedArticles.filter((article) => article.url !== articleToRemove.url)
    );
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    handleCloseModals();
  };

  const handleRegister = (userData) => {
    console.log("Registered:", userData);
    handleCloseModals();
    handleLoginClick();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const headerProps = {
    isLoggedIn,
    currentUser,
    onLogout: handleLogout,
    isLoginModalOpen,
    isRegisterModalOpen,
    onLoginClick: handleLoginClick,
    onCloseModals: handleCloseModals,
  };

  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero-section">
                  <Header {...headerProps} />
                  <SearchForm
                    onSearchStart={handleSearchStart}
                    onSearchResults={handleSearchResults}
                    onSearchError={handleSearchError}
                    onSearchComplete={handleSearchComplete}
                    setSearchQuery={setSearchQuery}
                  />
                </div>
                <main>
                  <NewsCardList
                    articles={searchResults}
                    isLoading={isLoading}
                    searchError={searchError}
                    onSaveArticle={handleSaveArticle}
                    isLoggedIn={isLoggedIn}
                    savedArticles={savedArticles}
                    onSignInClick={handleLoginClick}
                    searchQuery={searchQuery}
                  />
                  <About />
                </main>
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <Header {...headerProps} />
                <main>
                  <SavedNews
                    savedArticles={savedArticles}
                    onRemoveArticle={handleRemoveArticle}
                    currentUser={currentUser}
                  />
                </main>
              </>
            }
          />
        </Routes>
        <Footer />

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
          onRegister={handleRegister}
        />
      </div>
    </HashRouter>
  );
}

export default App;
