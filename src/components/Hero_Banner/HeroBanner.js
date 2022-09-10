import React, { useState, useEffect } from "react";
import "./HeroBanner.css";

function ImgOne() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="heading">
        {/* <h1 className="text"> The Power to do more....</h1>
        <h2 className="caption">
        The competition can’t compare. See for yourself.
        </h2> */}
      </div>
      <div className="cta">
        {/* <p>
          We are a diverse team with unique perspectives. United in our purpose, our strategy and our culture. Driven by our ambition and the power of technology to drive human progress. Unwavering in our commitment to equality, trust and advocacy for one another.
        </p>
        <p>
          Go from ideas to outcomes faster with a simple and consistent cloud experience, AI-based laptops, proactive storage solutions and automated servers that outmaneuver threats.
        </p>
        <p>
        We have a responsibility to protect our planet and drive impact on urgent environmental issues. Through innovative technology, partnerships and people we will take action on climate change, reduce waste and champion the people who make our products.
        </p> */}
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="background"
        style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
      />
      {/* <div
        className="background-triangles"
        style={{ transform: `translateY(${offsetY * 1.0}px)` }}
      /> */}
      <div className="content">{renderContent()}</div>
    </section>
    
  );
}

export default ImgOne;