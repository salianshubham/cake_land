import React from "react";
import ReactDOM from "react-dom";
import HeadingSection from "./HeaderSection";
import MenuSection from "./MenuSection";
import OurHotPickedSection from "./HotPickedCakesSection";
import FooterSection from "./FooterSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


ReactDOM.render(
  <>
    <HeadingSection />
    <MenuSection/>
    <OurHotPickedSection/>
    <FooterSection/>
  </>,
  document.getElementById("root")
);
