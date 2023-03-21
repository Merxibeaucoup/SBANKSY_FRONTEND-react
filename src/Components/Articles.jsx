import React from "react";
import { articleData } from "../data/articleData";
import ArticleList from "./ArticleList";

const Articles = () => {
  return (
    <article className="article">
      <div className="container">
        <div className="article__heading">
          <h4 className="article__heading-header">Latest Articles</h4>
        </div>
        <div className="article__list">
          {articleData.map((item) => {
            return <ArticleList item={item} key={item.id} />;
          })}
        </div>
      </div>
    </article>
  );
};

export default Articles;
