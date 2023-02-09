import { useState, useEffect } from "react";


export const CommentList = ({article_id}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://dimitrina-news.onrender.com/api/articles/${article_id}/comments`)
          .then((res) => res.json())
          .then((data) => setComments(data.comments))
          .catch(error => console.error(error));
      }, [article_id]);


return (
<section>
<h2>Comments:</h2>
      {comments.map((comment) => (
        <div className="comment" key={comment.comment_id}>
          <p>{comment.body}</p>
          <p>Author: {comment.author}</p>
          <p>Date: {comment.created_at}</p>
        </div>
))}
</section>
)

}
