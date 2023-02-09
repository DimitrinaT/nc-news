import React from 'react';
import { Link } from 'react-router-dom';



export const ArticleCard = ({ title, article_img_url, article_id }) => {

  return (
   
    <article>
    <div className="card">
      <img src={article_img_url} alt={title} />
      <Link key={article_id} to={`articles/${article_id}`}>
      <h2>{title}</h2>
      </Link>
    </div>
    </article>
  
  );
};
