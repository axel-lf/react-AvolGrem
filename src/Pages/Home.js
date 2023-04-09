import React from "react";
import Navbar from "../Navbar/Navbar";
import Home1 from "../componentsHome/home1/Home1";
import Home2 from "../componentsHome/home2/Home2";
import Home3 from "../componentsHome/home3/Home3";
import Context from "../componentsHome/context/Context";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Home = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Navbar />
      <Home1 />
      <Home2 />
      <Context />
      <Home3 />
      <Footer />
    </div>
  );
};

export default Home;
