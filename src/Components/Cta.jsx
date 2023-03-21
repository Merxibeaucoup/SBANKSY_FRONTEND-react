import React, { useState } from "react";
import { ctaData } from "../data/ctaData";
import CtaList from "./CtaList";

const Cta = () => {
  const [state] = useState({
    heading: "Why choose Easybank?",
    pragraph:
      "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
  });
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__text">
          <h4 className="cta__text-heading">{state.heading}</h4>
          <p className="cta__text-paragraph">{state.pragraph}</p>
        </div>
        <div className="cta__list">
          {ctaData.map((item) => {
            return <CtaList item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Cta;
