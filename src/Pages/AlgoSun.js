import Navbar from "../Navbar/Navbar";
import React, { Component, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Sun from "../componentsSimu/Sun";
import "./AlgoWindSunHydro.css";
import "./WindCatalogue.css";
import { BsArrowReturnRight } from "react-icons/bs";
import Alert from "./Alert";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default class AlgoSun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((previousState) => ({
      visibility: !previousState.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <Navigate to="/simulation" replace={true} />
        </div>
      );
    } else {
      return (
        <div>
          <Alert />
          <ScrollToTopOnMount />
          <Navbar />
          <div className="posit-sun">
            {" "}
            <Sun />
            <div className="catalogue-sun">
              <div className="catalogue-sun-title">
                Panneau solaire proposé :
              </div>
              <div className="catalogue-sun-box">
                <div className="sun1-card">
                  <h1 className="sun1-title">
                    SunPower Maxeon 6 AC 415W Full black
                  </h1>
                  <p className="eol1-caract">
                    Puissance nominale : 415 W<br></br>
                    Equipement : onduleur (garantie 25 ans)<br></br>
                    Dimensions : 1872mm x 1032mm<br></br>
                    Rendement : 22%<br></br>
                    Prix : 640 €/panneau
                    <br></br>
                    Durée de vie (moyenne) : 40 ans
                  </p>
                </div>
              </div>
            </div>
            <div className="algo-button">
              <button className="algo-return" onClick={this.toggleVisibility}>
                <span className="algo-btn-title">Retour</span>
                <span className="algo-btn-back">
                  <BsArrowReturnRight size="25px" />
                </span>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
