const NEWS_API_BASE_URL = process.env.NODE_ENV === "production"
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const APIkey = "2ae77b85ee784d098b4ae504d1a2eca8";

export { NEWS_API_BASE_URL, APIkey };