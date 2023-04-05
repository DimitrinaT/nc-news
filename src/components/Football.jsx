import React, { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Football = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dimitrina-news.onrender.com/api/articles?topic=football")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <nav className="home-page-link">
      <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
            </nav>
    <div className='container-football' >
      {loading ? (
        <div>Loading...</div>
      ) : (
        articles.map((article) => (
          <ArticleCard
            key={article.article_id}
            title={article.title}
            article_img_url={article.article_img_url}
            article_id={article.article_id}
          />
        ))
      )}
    </div>
    </div>
  );
};

export default Football;





