import React, { useEffect } from "react";
import "./Simu.css";
import Navbar from "../Navbar/Navbar";
import Simulation from "../componentsSimu/Simulation";
import Simulation2 from "../componentsSimu/simulation2";
import Footer from "../Footer/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Simu = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Navbar />
      <Simulation />
      <Simulation2 />
      <Footer />
    </div>
  );
};

export default Simu;
