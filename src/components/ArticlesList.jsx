import {useState, useEffect} from 'react'
import { ArticleCard } from './ArticalCard'


export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      fetch('https://dimitrina-news.onrender.com/api/articles')
        .then((res) => res.json())
        .then((data) => 
          
        setArticles(data.articles)
        
        );
        
    }, []);
    
    

return (
    <div className="article-list">
      {articles.length > 0 && articles.map((article) => (
        <ArticleCard
          key={article.article_id} 
             title={article.title}
                 article_img_url={article.article_img_url}
        />

      ))}
    </div>
  );
      };