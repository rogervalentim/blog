import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";

import axios from "axios";

import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    loadArticleInfo();
  }, []);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    try {
      const response = await axios.put(`/api/articles/${articleId}/upvote`);
      const updateArticle = response.data;
      setArticleInfo(updateArticle);
    } catch (err) {
      console.log(err);
    }
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        <button onClick={addUpvote}>Upvote</button>
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
