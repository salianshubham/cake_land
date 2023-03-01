import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <>
    <section>
      <div className="front_Page">
        <div className="front_Page container">
          <header>
            <h2 class="logo">CAKE LAND</h2>
            <nav class="navigation">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </header>
        </div>
      </div>
    </section>

    {/* middle page */}

    <section id="services">
      <div className="middlePage middlePageContainer">
        {/* <div className="div1">BOX1</div>
        <div className="div2">BOX2</div>
        <div className="div3">BOX3</div>
        <div className="div4">BOX4</div> */}
      </div>
    </section>
  </>,
  document.getElementById("root")
);
