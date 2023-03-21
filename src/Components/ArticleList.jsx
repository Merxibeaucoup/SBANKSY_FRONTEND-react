import React from "react";

const ArticleList = ({ item }) => {
  return (
    <div className="article__list__items">
      <img className="article__list__items-img" src={item.image} alt="" />
      <div className="plpr">
        <p className="article__list__items-by">{item.by}</p>
        <h4 className="article__list__items-heading">{item.heading}</h4>
        <p className="article__list__items-paragraph">{item.paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleList;
