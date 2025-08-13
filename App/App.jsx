import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import SearchForm from '../src/components/SearchForm/SearchForm';
import NewsCardList from '../src/components/NewsCardList/NewsCardList';
import About from '../src/components/About/About';
import Footer from '../src/components/Footer/Footer';
import SavedNews from '../src/components/SavedNews/SavedNews';
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

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
    if (!isLoggedIn) return;
    setSavedArticles([...savedArticles, article]);
  };

  const handleRemoveArticle = (articleToRemove) => {
    setSavedArticles(savedArticles.filter(article => article.url !== articleToRemove.url));
  };

  const handleSignInClick = () => {
    setLoginModalOpen(true);
  }

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <HashRouter>
      <div className="app">
        <Header 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}
        isLoginModalOpen={isLoginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <SearchForm 
                  onSearchStart={handleSearchStart}
                  onSearchResults={handleSearchResults}
                  onSearchError={handleSearchError}
                  onSearchComplete={handleSearchComplete}
                  setSearchQuery={setSearchQuery}
                />
                <NewsCardList 
                  articles={searchResults}
                  isLoading={isLoading}
                  searchError={searchError}
                  onSaveArticle={handleSaveArticle}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onSignInClick={handleSignInClick}
                  searchQuery={searchQuery}
                />
                <About />
              </>
            } 
          />
          <Route 
            path="/saved-news" 
            element={
              isLoggedIn ? (
                <SavedNews 
                  savedArticles={savedArticles}
                  onRemoveArticle={handleRemoveArticle}
                  currentUser={currentUser}
                />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;