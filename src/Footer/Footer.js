import React from "react";
import "./Footer.css";
import logoBlanc from "./logoBlanc.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="foot-box">
      <div className="foot-table-box">
        <table className="foot-table">
          <th className="col1-foot">
            <tr className="col1-lg1-foot">
              <div className="titre1-foot">NAVIGATION</div>
            </tr>
            <tr className="col1-lg2-foot">
              <Link id="RouterNavLink" to="/" className="link-footer">
                <span>Accueil</span>
              </Link>
              <br></br>
              <Link id="RouterNavLink" to="/simulation" className="link-footer">
                <span>Simulation</span>
              </Link>
              <br></br>
              <Link
                id="RouterNavLink"
                to="/Energies_renouvelables"
                className="link-footer"
              >
                <span>Energies Renouvelables</span>
              </Link>
              <br></br>
              <Link id="RouterNavLink" to="/propos" className="link-footer">
                <span>A Propos</span>
              </Link>
            </tr>
          </th>
          <th className="col2-foot">
            <img src={logoBlanc} className="logoBlanc" alt="" />
          </th>
          <th className="col3-foot">
            <tr className="col3-lg1-foot">
              <div className="titre2-foot">PARTENAIRE</div>
            </tr>
            <tr className="col3-lg2-foot">
              <div>ISEN Brest</div>
            </tr>
          </th>
        </table>
      </div>
    </div>
  );
}
