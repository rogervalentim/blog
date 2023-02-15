import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import articles from "./article-content";

import axios from "axios";

import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

import useUser from "../hooks/useUser";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false
  });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();

  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authToken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    if (isLoading) {
      loadArticleInfo();
    }
  }, [isLoading, user]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    try {
      const token = user && (await user.getIdToken());
      const headers = token ? { authToken: token } : {};
      const response = await axios.put(
        `/api/articles/${articleId}/upvote`,
        null,
        { headers }
      );
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
      <h1 className="flex justify-center text-black  text-[30px]">
        {article.title}
      </h1>
      <div className="flex justify-center mt-[20px]">
        {user ? (
          <button
            className="bg-black text-white w-[140px] h-[40px] rounded-lg"
            onClick={addUpvote}
          >
            {canUpvote ? "Upvote" : "Already Upvoted"}
          </button>
        ) : (
          <button
            className="bg-black text-white w-[140px] h-[40px] rounded-lg"
            onClick={() => {
              navigate("/login");
            }}
            type="button"
          >
            Log in to upvote
          </button>
        )}
        <p className="mt-[10px]">This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      <div className="mx-24 mt-[50px]">
        {article.content.map((paragraph, i) => (
          <p className="p-4 text-justify" key={i}>
            {paragraph}
          </p>
        ))}
      </div>
      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updateArticle) => setArticleInfo(updateArticle)}
        />
      ) : (
        <Link
        className="mx-24 px-2 cursor-pointer underline font-bold"
        to='/login'
        >Log in to add a comment</Link>
      )}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;