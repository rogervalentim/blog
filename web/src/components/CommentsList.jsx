const CommentsList = ({ comments }) => (
  <>
    <h3 className="text-black font-semibold flex justify-center">Comments:</h3>
    {comments.map((comment, key) => (
      <div className="flex justify-center">
        <div className="flex flex-col w-[400px]" key={key}>
          <label className="block text-gray-700 text-sm font-bold mb-2">{comment.postedBy}:</label>
          <p className="border">{comment.text}</p>
        </div>
      </div>
    ))}
  </>
);

export default CommentsList;
