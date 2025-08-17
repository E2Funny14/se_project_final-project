const NEWS_API_BASE_URL = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const APIkey = import.meta.env.VITE_NEWS_API_KEY;

export { NEWS_API_BASE_URL, APIkey };