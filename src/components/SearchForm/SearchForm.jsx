import { useState } from "react";
import { searchNews } from "../../utils/newsApi";
import "./SearchForm.css";

function SearchForm({ onSearchStart, onSearchResults, onSearchError, onSearchComplete, setSearchQuery }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }

    try {
      setIsLoading(true);
      onSearchStart();
      const results = await searchNews(query);
      setSearchQuery(query);
      onSearchResults(results.articles);
    } catch (err) {
      onSearchError(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
      onSearchComplete();
    }
  };

  return (
    <section className="search-form">
      <h1 className="search-form__title">What's going on in<br /> the world?</h1>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal account.
      </p>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className={`search-form__input ${error ? 'search-form__input_type_error' : ''}`}
          placeholder={error ? error : "Enter topic"}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (error) setError("");
          }}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="search-form__button"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
