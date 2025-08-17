import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ savedArticles = [], onRemoveArticle, currentUser }) {
  function getKeywordsList() {
    if (!savedArticles || savedArticles.length === 0) return "";

    const keywords = savedArticles
      .map((article) => article.keyword)
      .filter(Boolean);

    const uniqueKeywords = [...new Set(keywords)];

    if (uniqueKeywords.length === 0) return "";
    if (uniqueKeywords.length === 1) return uniqueKeywords[0];
    if (uniqueKeywords.length === 2)
      return `${uniqueKeywords[0]} and ${uniqueKeywords[1]}`;

    const remainingCount = uniqueKeywords.length - 2;
    return `${uniqueKeywords[0]}, ${
      uniqueKeywords[1]
    }, and ${remainingCount} other${remainingCount > 1 ? "s" : ""}`;
  }

  return (
    <section className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__subtitle">Saved articles</p>
        <h2 className="saved-news__title">
          {savedArticles?.length > 0
            ? `${currentUser?.name ? `${currentUser.name}, ` : ""}you have ${
                savedArticles.length
              } saved article${savedArticles.length === 1 ? "" : "s"}`
            : "No saved articles yet"}
        </h2>
        {savedArticles.length > 0 && (
          <p className="saved-news__keywords">
            By keywords: {getKeywordsList()}
          </p>
        )}
      </div>
      <div className="saved-news__grid">
        {savedArticles?.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isLoggedIn={true}
            isSaved={true}
            onRemoveArticle={() => onRemoveArticle(article)}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNews;
