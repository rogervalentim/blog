import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <>
    <h1 className="flex justify-center text-black text-[55px]">Articles</h1>
    <ArticlesList articles={articles} />
    </>
  )
}

export default ArticlesListPage