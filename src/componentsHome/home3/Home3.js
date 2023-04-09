import React from "react";
import "./Home3.css";
import { Link } from "react-router-dom";

export default function Home3() {
  return (
    <div className="home3-box">
      <div className="nous-home-box">
        <div className="nous-title-back">
          <div className="nous-title">Qui sommes-nous ?</div>
        </div>
        <div className="info-box">
          <button className="savoir_btn">
            <Link id="RouterNavLink" to="/propos" className="link_home">
              <span>En savoir plus</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
