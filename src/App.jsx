import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
//import {Route} from "react-router-dom";
import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
const App = () => {
  return (
    <>
    <Navbar/>
      <h1>abcd</h1>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} /> */}
    </>
  );
};

export default App;
