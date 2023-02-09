import axios from "axios";
import { useState } from "react";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
        postedBy: name,
        text: commentText,
    });
    const updateArticle = response.data;
    onArticleUpdated(updateArticle);
    setName('');
    setCommentText('');
  }

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Comment:
        <textarea 
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
        cols="50" 
        rows="4" 
        />
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
