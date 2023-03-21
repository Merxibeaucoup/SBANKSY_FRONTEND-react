import React from "react";

const CtaList = ({ item }) => {
  return (
    <div className="cta__list__items">
      <img className="cta__list__items-icon" src={item.icon} alt="" />
      <h4 className="cta__list__items-heading">{item.heading}</h4>
      <p className="cta__list__items-paragraph">{item.paragraph}</p>
    </div>
  );
};

export default CtaList;
