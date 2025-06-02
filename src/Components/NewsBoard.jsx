import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=30472bb4a98d4082af7d15724cef67ff`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'error') {
          throw new Error(data.message || 'API request failed');
        }

        setArticles(data.articles || []);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch news');
        setArticles([]);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          Error: {error}
        </div>
      ) : articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            desc={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <div className="text-center">No articles found.</div>
      )}
    </div>
  );
};

export default NewsBoard;