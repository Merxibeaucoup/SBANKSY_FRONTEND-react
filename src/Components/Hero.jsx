import React, { useState } from "react";

const Hero = () => {
  const [state] = useState({
    heading: "Next generation digital banking",
    paragraph:
      "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
    bottom: "assets/images/bg-intro-desktop.svg",
    phone: "assets/images/image-mockups.png",
  });

  return (
    <div className="hero">
      <div className="hero__text">
        <h2 className="hero__text-heading">{state.heading}</h2>
        <p className="hero__text-paragraph">{state.paragraph}</p>
        <button className="hero__text-button">Request invite</button>
      </div>
      <div
        className="hero__img"
        style={{
          background: `url(${state.bottom})`,
          backgroundSize: "800px 700px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 10px  top -160px ",
        }}
      >
        <div>
          <img src={state.phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
