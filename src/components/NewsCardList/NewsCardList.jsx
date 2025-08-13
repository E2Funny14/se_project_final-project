import { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./NewsCardList.css";

function NewsCardList({ articles, isLoading, searchError, isLoggedIn, onSaveArticle, savedArticles, searchQuery }) {
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    setVisibleCards(3);
  }, [articles]);

  if (isLoading) {
    return <Preloader />;
  }

  if (searchError) {
    return (
      <section className="news-card-list">
        <p className="news-card-list__error">
          {searchError === "NOT_FOUND" 
            ? "Nothing found" 
            : "Sorry, something went wrong during the request. Please try again later."}
        </p>
      </section>
    );
  }

  if (!articles?.length) {
    return null;
  }

  const handleShowMore = () => {
    setVisibleCards(prev => prev + 3);
  };

  const visibleArticles = articles.slice(0, visibleCards);
  const hasMoreArticles = visibleCards < articles.length;

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search Results</h2>
      <div className="news-card-list__grid">
        {visibleArticles.map((article, index) => (
          <NewsCard key={index} article={{...article, keyword: searchQuery}} isLoggedIn={isLoggedIn} onSaveArticle={() => onSaveArticle({...article, keyword: searchQuery})} isSaved={savedArticles?.some(saved => saved.url === article.url)}  />
        ))}
      </div>
      {hasMoreArticles && (
        <button 
          className="news-card-list__show-more" 
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;