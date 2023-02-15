import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";
import ImageArticles from "../assets/node-react.png";

const ArticlesListPage = () => (
  <>
    <h1 className="flex justify-center text-black text-[55px]">Articles</h1>
    <div className="flex justify-center mt-2">
      <img
        className="w-[400px] rounded"
        src={ImageArticles}
        alt="node and react"
      />
    </div>
    <ArticlesList articles={articles} />
  </>
);

export default ArticlesListPage;
