import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
    <div className="flex flex-col">
      {articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`/articles/${article.name}`}
        >
          <h3 className="flex justify-center text-black font-semibold text-lg mt-[20px]">{article.title}</h3>
          <p className="flex justify-center">{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </div>
  );

export default ArticlesList;
