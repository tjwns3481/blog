import React from "react";
import Wrap from "./Components/UI/Wrap";
import "./Components/UI/Reset.css";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Router from "./Router/Router";
const App = () => {
  return (
    <div>
      <Header />
      <Wrap>
        <Router />
        <Footer />
      </Wrap>
    </div>
  );
};

export default App;
