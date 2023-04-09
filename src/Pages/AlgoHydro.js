import Navbar from "../Navbar/Navbar";
import React, { Component, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import Hydro from "../componentsSimu/Hydro";
import "./AlgoWindSunHydro.css";
import Alert from "./Alert";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default class AlgoHydro extends Component {
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
          <div className="posit-hydro">
            {" "}
            <Hydro />
            <div className="catalogue-hydro">
              <div className="catalogue-hydro-title">
                Catalogue des hydroliennes proposées :
              </div>
              <div className="catalogue-hydro-box">
                <div className="hydro1-card">
                  <h1 className="eol1-title">SETUR-M</h1>
                  <p className="eol1-caract">
                    Puissance nominale : 0.5 KW<br></br>
                    Profondeur d'installation maximale : 50 m<br></br>
                    Dimensions : 505x516x886 mm<br></br>
                    Type de générateur : Aimant permanent<br></br>
                    Vitesse d'écoulement de l'eau : 4 m/s
                    <br></br>
                    Prix : 2500 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </p>
                </div>
                <div className="hydro1-card">
                  <h1 className="eol1-title">POSEIDE 66</h1>
                  <div className="eol1-caract">
                    Puissance nominale : 3.5 KW<br></br>
                    Profondeur d'installation minimale : 1.5 m<br></br>
                    Dimensions : 1500x1000x1000 mm<br></br>
                    Type de générateur : Aimant permanent<br></br>
                    Vitesse d'écoulement de l'eau : 3 m/s <br></br>
                    Prix : 50 000 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </div>
                </div>
              </div>
              <div className="catalogue-hydro-box">
                <div className="hydro1-card">
                  <h1 className="eol1-title">SETUR-L</h1>
                  <p className="eol1-caract">
                    Puissance nominale : 5 KW<br></br>
                    Profondeur d'installation maximale : 20 m<br></br>
                    Dimensions : 1012x1000x1813 mm<br></br>
                    Type de générateur : Aimant permanent<br></br>
                    Vitesse d'écoulement de l'eau : 4 m/s<br></br>
                    Prix : 20 700 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </p>
                </div>
                <div className="hydro1-card">
                  <h1 className="eol1-title">POSEIDE 154</h1>
                  <div className="eol1-caract">
                    Puissance nominale : 20 KW<br></br>
                    Profondeur d'installation minimale : 3 m<br></br>
                    Dimensions : 3000x2300x2300 mm<br></br>
                    Type de générateur : Aimant permanent<br></br>
                    Vitesse d'écoulement de l'eau : 2.5 m/s<br></br>
                    Prix : 90 000 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </div>
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
