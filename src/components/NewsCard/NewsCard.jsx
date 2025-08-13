import { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./NewsCard.css";

function NewsCard({ article, isLoggedIn, isSaved, onSaveArticle, onRemoveArticle }) {
  const { title, description, url, urlToImage, publishedAt, source, keyword } = article;
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const location = useLocation();
  const isOnSavedNews = location.pathname === '/saved-news';
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleBookmarkClick = () => {
    if (!isLoggedIn) return;
    
    if (isOnSavedNews || isSaved) {
      onRemoveArticle && onRemoveArticle(article);
    } else {
      onSaveArticle && onSaveArticle(article);
    }
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        {urlToImage && (
          <img 
            src={urlToImage} 
            alt={title} 
            className="news-card__image" 
          />
        )}
        {isOnSavedNews && (
          <div className="news-card__keyword">{keyword}</div>
        )}
        <div className="news-card__bookmark-container">
          <button
            type="button"
            className={`news-card__bookmark ${
              !isLoggedIn ? 'news-card__bookmark_inactive' : ''
            } ${isOnSavedNews ? 'news-card__bookmark_trash' : ''} 
            ${isSaved && !isOnSavedNews ? 'news-card__bookmark_saved' : ''}`}
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            onClick={handleBookmarkClick}
          >
            {isOnSavedNews ? (
              <div className={`news-card__tooltip ${isTooltipVisible ? 'news-card__tooltip_visible' : ''}`}>
                Remove from saved
              </div>
            ) : !isLoggedIn && (
              <div className={`news-card__tooltip ${isTooltipVisible ? 'news-card__tooltip_visible' : ''}`}>
                Sign in to save articles
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{formatDate(publishedAt)}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{description}</p>
        <p className="news-card__source">{source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;