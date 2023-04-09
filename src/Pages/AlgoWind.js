import Navbar from "../Navbar/Navbar";
import React, { Component, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Vent from "../componentsSimu/Vent";
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

export default class AlgoWind extends Component {
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
          <div className="posit-wind">
            {" "}
            <Vent />
            <div className="catalogue-wind">
              <div className="catalogue-wind-title">
                Catalogue des éoliennes proposées :
              </div>
              <div className="catalogue-eol-box">
                <div className="eol1-card">
                  <h1 className="eol1-title">Antaris 2.5</h1>
                  <p className="eol1-caract">
                    Puissance nominale : 2.5 KW<br></br>
                    Hauteur conseillée : 7 m et plus<br></br>
                    Diamètre des pâles : 3 m<br></br>
                    Type de générateur : Synchrone<br></br>
                    Vitesse de vent min. au démarrage : 2.8 m/s<br></br>
                    Prix : 18 200 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </p>
                </div>
                <div className="eol1-card">
                  <h1 className="eol1-title">Antaris 3.5</h1>
                  <div className="eol1-caract">
                    Puissance nominale : 3.7 KW<br></br>
                    Hauteur conseillée : 7 m et plus<br></br>
                    Diamètre des pâles : 3.5 m<br></br>
                    Type de générateur : Synchrone<br></br>
                    Vitesse de vent min. au démarrage : 2.8 m/s<br></br>
                    Prix : 21 500 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </div>
                </div>
                <div className="eol1-card">
                  <h1 className="eol1-title">Antaris 5.5</h1>
                  <div className="eol1-caract">
                    Puissance nominale : 5.5 KW<br></br>
                    Hauteur conseillée : 10 m et plus<br></br>
                    Diamètre des pâles : 4 m<br></br>
                    Type de générateur : Synchrone<br></br>
                    Vitesse de vent min. au démarrage : 2.8 m/s<br></br>
                    Prix : 24 050 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </div>
                </div>
              </div>
              <div className="catalogue-eol-box">
                <div className="eol1-card">
                  <h1 className="eol1-title">Antaris 7.5</h1>
                  <p className="eol1-caract">
                    Puissance nominale : 7.5 KW<br></br>
                    Hauteur conseillée : 10 m et plus<br></br>
                    Diamètre des pâles : 5.3 m<br></br>
                    Type de générateur : Synchrone<br></br>
                    Vitesse de vent min. au démarrage : 2.8 m/s<br></br>
                    Prix : 31 150 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </p>
                </div>
                <div className="eol1-card">
                  <h1 className="eol1-title">Antaris 12</h1>
                  <div className="eol1-caract">
                    Puissance nominale : 12 KW<br></br>
                    Hauteur conseillée : 10 m et plus<br></br>
                    Diamètre des pâles : 6.5 m<br></br>
                    Type de générateur : Synchrone<br></br>
                    Vitesse de vent min. au démarrage : 2.2 m/s<br></br>
                    Prix : 51 900 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </div>
                </div>
                <div className="eol1-card">
                  <div className="eol1-title">Tuge 15</div>
                  <div className="eol1-caract">
                    Puissance nominale : 15 KW<br></br>
                    Hauteur conseillée : 18 m à 24 m<br></br>
                    Diamètre des pâles : 13 m<br></br>
                    Type de générateur : Asynchrone<br></br>
                    Vitesse de vent min. au démarrage : 3 m/s<br></br>
                    Prix : 70 000 €<br></br>
                    Durée de vie (moyenne) : 20 ans
                  </div>
                </div>
              </div>
              <div className="catalogue-eol-box">
                <div className="eol1-card">
                  <div className="eol1-title">Tuge 60</div>
                  <div className="eol1-caract">
                    Puissance nominale : 60 KW<br></br>
                    Hauteur conseillée : 24 m à 38 m<br></br>
                    Diamètre des pâles : 16 m<br></br>
                    Type de générateur : Asynchrone<br></br>
                    Vitesse de vent min. au démarrage : 3 m/s<br></br>
                    Prix : 150 000 €<br></br>
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
