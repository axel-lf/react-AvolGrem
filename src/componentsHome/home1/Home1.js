import React from "react";
import "./Home1.css";
import { Link } from "react-router-dom";

export default function Home1() {
  return (
    <div className="home-head-back">
      <div className="home-head-title">Prototyper et Optimiser</div>
      <br />
      <div className="home-sentence">
        Laissez-nous vous aider pour le prototypage et l'optimisation des
        solutions renouvelables qui s'offrent à vous. En choisissant le
        dispositif renouvelable que vous souhaitez, nous vous conseillons
        l'installation la plus convenable à votre situation géographique.
      </div>
      <div className="btn_home">
        <button className="simu_btn">
          <Link id="RouterNavLink" to="/simulation" className="link_home">
            <span>Commencer la simulation</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
