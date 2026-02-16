import { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import notFoundIcon from "../../assets/not-found.svg";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  isLoading,
  searchError,
  isLoggedIn,
  onSaveArticle,
  savedArticles,
  searchQuery,
}) {
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
        <div className="container news-card-list__container">
          {searchError === "NOT_FOUND" ? (
            <div className="not-found">
              <img 
                src={notFoundIcon} 
                alt="Not found" 
                className="not-found__icon"
              />
              <h2 className="not-found__title">Nothing found</h2>
              <p className="not-found__text">
                Sorry, but nothing matched 
                <br></br>
                your search terms.
              </p>
            </div>
          ) : (
            <p className="news-card-list__error">
              Sorry, something went wrong during the request. Please try again later.
            </p>
          )}
        </div>
      </section>
    );
  }

  if (!articles?.length) {
    return null;
  }

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const visibleArticles = articles.slice(0, visibleCards);
  const hasMoreArticles = visibleCards < articles.length;

  return (
    <section className="news-card-list">
      <div className="container">
      <h2 className="news-card-list__title">Search Results</h2>
      <div className="news-card-list__grid">
        {visibleArticles.map((article) => (
          <NewsCard
            key={article.url}
            article={{ ...article, keyword: searchQuery }}
            isLoggedIn={isLoggedIn}
            onSaveArticle={() =>
              onSaveArticle({ ...article, keyword: searchQuery })
            }
            isSaved={savedArticles?.some((saved) => saved.url === article.url)}
          />
        ))}
      </div>
      {hasMoreArticles && (
        <button className="news-card-list__show-more" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </div>
    </section>
  );
}

export default NewsCardList;
