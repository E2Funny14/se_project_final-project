import { NEWS_API_BASE_URL, APIkey } from "./constants";

export const searchNews = async (query) => {
  if (!query.trim()) {
    throw new Error("Please enter a keyword");
  }

  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    q: query,
    apiKey: APIkey,
    from: sevenDaysAgo.toISOString().split("T")[0],
    to: today.toISOString().split("T")[0],
    pageSize: 100,
    language: "en",
    sortBy: "publishedAt",
  });

  try {
    const response = await fetch(`${NEWS_API_BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error("Request failed. Please try again later.");
    }
    return response.json();
  } catch (error) {
    console.error("Error searching news:", error);
    throw error;
  }
};
