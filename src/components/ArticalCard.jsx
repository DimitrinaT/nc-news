import React from 'react';


export const ArticleCard = ({ title, article_img_url }) => {

  return (
    <article>
    <div className="card">
      <img src={article_img_url} alt={title} />
      <h2>{title}</h2>
     
    </div>
    </article>
  );
};
