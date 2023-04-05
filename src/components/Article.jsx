import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentList } from "./CommentList";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';



const Article = () => {
    const { article_id } = useParams();
   const [article, setArticle] = useState({});
   const [loading, setLoading] = useState(true);
 
  
    useEffect(() => {
     
      fetch(`https://dimitrina-news.onrender.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [article_id]);

    const handleVotes=(vote)=>{ 
      axios.patch(`https://dimitrina-news.onrender.com/api/articles/${article_id}`,{
        inc_votes:vote
      }).then((response)=>{
        setArticle(response.data.article)
      }).catch(error=>console.error(error))
    }

    return (
      <div className="article">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.body}</p>
            <p>Author: {article.author}</p>
            <p>Data: {article.created_at} </p>
            <p>Votes: {article.votes}</p>
            <button  onClick={()=>handleVotes(1)}>Vote +</button>
            <button  onClick={()=>handleVotes(-1)}>Vote -</button>
            <nav className="home-page-link">
            <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
            </nav>
            <CommentList article_id={article_id} />
           
          </>
        )}
      </div>
    );
  };
  
   
  

  export default Article