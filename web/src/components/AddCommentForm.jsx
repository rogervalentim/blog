import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const response = await axios.post(
      `/api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText
      },
      {
        headers
      }
    );
    const updateArticle = response.data;
    onArticleUpdated(updateArticle);
    setName("");
    setCommentText("");
  };

  return (
    <>
      <h3 className="flex justify-center text-black mt-[50px]">
        Add a Comment
      </h3>
      <div className="flex justify-center">
        <form className="rounded px-8 pt-6 pb-8 mb-4">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows="4"
            className="block p-2.5 text-sm w-[400px] mt-[20px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={addComment}
            type="button"
            className="w-[400px] bg-green-500 hover:bg-green-700 text-white mt-[20px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Comment
          </button>
          {user && (
            <p className="text-black flex justify-center mt-[20px] underline">
              You are posting as {user.email}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default AddCommentForm;
