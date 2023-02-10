import { useState, useEffect,useContext
 } from "react";
import axios from 'axios';
import { UserContext } from "../context/UserContext";

export const CommentList = ({article_id}) => {

    const [comments, setComments] = useState([]);
    const [comment,setComment] = useState()
    const [loading,setLoading] = useState(false);
    const {loggedInUser} = useContext(UserContext)

    useEffect(() => {
        fetch(`https://dimitrina-news.onrender.com/api/articles/${article_id}/comments`)
          .then((res) => res.json())
          .then((data) => setComments(data.comments))
          .catch(error => console.error(error));
      }, [article_id]);

const onClickHandler=()=>{
if(comment.length>0){
  setLoading(true)
axios.post(`https://dimitrina-news.onrender.com/api/articles/${article_id}/comments`,{
  username:loggedInUser.username,
  body:comment
}).then((response)=>{
  const postedComment=response.data.comment;
  setComments([postedComment,...comments])
  setComment("");
  setLoading(false);
}).catch((error)=>{
  console.error(error)
  setLoading(false)
})

}else{
console.log("Please give some text in comment")
}
}
const onChangeHandler=(e)=>{
setComment(e.target.value);
}

return (
<section>
<h3 className="text">Add comment</h3>
<textarea  
value={comment} 
onChange={onChangeHandler}/>
<button onClick={onClickHandler} disabled={loading}>{loading ===false?"Submit":"Loading.."}</button>
<h2>Comments:</h2>
      {comments.map(({comment_id,body,author,created_at}) => (
        <div className="comment" key={comment_id}>
          <p>{body}</p>
          <p>Author: {author}</p>
          <p>Date: {created_at}</p>
        </div>
))}
</section>
)

}
