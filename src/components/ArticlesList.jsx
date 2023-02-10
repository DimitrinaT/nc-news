import {useState, useEffect} from 'react'
import { ArticleCard } from './ArticalCard'




export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://dimitrina-news.onrender.com/api/articles')
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.articles);
          setLoading(false);
    });
        
}, []);
    
    
return (
  <div className="article-list">
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
);


  };


  
