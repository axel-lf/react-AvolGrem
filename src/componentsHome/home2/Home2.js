import React from "react";
import "./Home2.css";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <div className="home-box">
      <div className="energie-home-box">
        <div className="energie-renou-title-back">
          <div className="energie-renou-title">
            RESSOURCES RENOUVELABLES PROPOSÉES
          </div>
        </div>
        <div className="energies-box">
          <div className="pv-card">
            <div className="pv-info">
              <h1 className="pv-title">Solaire</h1>
              <p className="pv-text">
                L’énergie solaire est une énergie dépendante du soleil. Elle est
                inépuisable, gratuite et disponible partout dans le monde.
                <br></br>
                <br></br>Les panneaux photovoltaïques captent la luminosité et
                produisent de l’électricité. Ils sont idéaux pour des endroits
                très ensoleillés. Ils arborent un très bon rendement et une
                maintenance minime.
              </p>
            </div>
          </div>
          <div className="eol-card">
            <div className="eol-info">
              <h1 className="eol-title">Éolien</h1>
              <p className="eol-text">
                L’énergie éolienne dépend du vent.
                <br></br>
                <br></br>
                Les éoliennes ou aérogénérateurs créent de l’électricité grâce
                au vent. Elles sont idéales pour des endroits régulièrement
                exposés au vent. Elles ont un très bon rendement et offrent une
                énergie “verte”.
              </p>
            </div>
          </div>
          <div className="hydro-card">
            <div className="hydro-info">
              <h1 className="hydro-title">Hydrolien</h1>
              <p className="hydro-text">
                L’énergie hydrolienne dépend des courants d’eau. <br></br>
                <br></br>
                Les hydroliennes utilisent la force de l’eau pour produire de
                l’électricité. Elles peuvent être installées dans la mer, une
                rivière ou un cours d’eau passant dans les propriétés. L’énergie
                produite dépend de la vitesse du courant d’eau.
              </p>
            </div>
          </div>
        </div>
        <button className="nrj_btn">
          <Link
            id="RouterNavLink"
            to="/Energies_renouvelables"
            className="link_home"
          >
            <span>En savoir plus</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
