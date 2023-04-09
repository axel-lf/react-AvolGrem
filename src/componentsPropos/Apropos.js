import React, { useEffect } from "react";
import "./Apropos.css";
import anais from "./anais.png";
import axel from "./axel.png";
import amirat from "./amirat.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function APropos() {
  return (
    <div>
      <ScrollToTopOnMount />
      <div className="about-head-back">
        <div className="about-head-title">
          <p>À Propos</p>
          <hr className="line-head-about"></hr>
        </div>
      </div>

      <div className="origin">
        <div className="origin-box-back">
          <div className="col1-txt">
            Avol est la contraction de deux mots : "Avel" et "héol" signifiant
            "vent" et "soleil" en breton
          </div>
          <div className="col2-txt">
            Grem vient du mot "Gremm" signifiant "énergie" en breton
          </div>
        </div>
      </div>

      <div className="project-box">
        <div className="project-text">
          <h2>NOTRE PROJET</h2>
          <table className="project-table">
            <tr>
              <th className="lg1-img"></th>
              <th className="lg1-txt">
                Ce projet est à des fins académiques. En étude à l'école
                d'ingénieur ISEN Brest, l'équipe du projet a choisi comme sujet
                le "développement d'une application de gestion et de prototypage
                d'un réseau micro-grid".
              </th>
            </tr>
          </table>
          <table className="project-table">
            <tr>
              <th className="lg2-txt">
                Forts de leur formation dans le domaine de l'énergie et se
                sentant concernés par les enjeux énergétiques et écologiques
                actuels, les membres de l'équipe d'AvolGrem ont créé une
                application permettant le prototypage d'un réseau électrique composé de ressources renouvelables.
              </th>
              <th className="lg2-img"></th>
            </tr>
          </table>
          <table className="project-table">
            <tr>
              <th className="lg3-img"></th>
              <th className="lg3-txt">
                {" "}
                Cette application vous propose un prototypage de micro-grid
                composée d'une solution renouvelable au choix. Grâce aux informations que
                vous entrerez, on vous proposera une solution micro-grid
                sur-mesure. Vous pourrez également connaitre le prix que cela
                engendrerait, le LCOE ainsi que votre impact écologique par vos
                émissions de CO2.
              </th>
            </tr>
          </table>
        </div>
        <div className="map-img"></div>
      </div>
      <div className="equip-box">
        <h2 className="equip-title">
          NOTRE EQUIPE<br></br>
        </h2>

        <div className="presentation">
          <div className="equip_back"></div>
          <div className="dispo">
            <div className="anais">
              <div className="overlay-anais">
                <img src={anais} className="anais-img" alt="" />
                <div className="normal">
                  <div className="text-anais">~ Anaïs NICOL ~</div>
                </div>
                <div className="hover">
                  <div className="description-anais">
                    Etudiante en première année de master à l'ISEN Brest, Anaïs
                    est originaire de Brest. <br></br>
                    <br></br>Très intéréssée par le domaine des énergies
                    renouvelables, elle s'est orientée cette année dans le
                    domaine professionnel de l'énergie.
                  </div>
                </div>
                <div className="role-anais">
                  Cheffe de projet - Développeuse Web
                </div>
              </div>
            </div>

            <div className="axel">
              <div className="overlay-axel">
                <img src={axel} className="axel-img" alt="" />
                <div className="normal">
                  <div className="text-axel">~ Axel LE FLOC'H ~</div>
                </div>
                <div className="hover">
                  <div className="description-axel">
                    Etudiant en première année de master à l'ISEN Brest, Axel
                    est originaire de Quimper. <br></br>
                    <br></br> Passionné par les enjeux actuels touchant
                    l'écologie et l'énergie, il a choisi de poursuivre ses
                    études dans le domaine professionnel de l'énergie.
                  </div>
                </div>
                <div className="role-axel">
                  Chef de projet - Développeur Web
                </div>
              </div>
            </div>

            <div className="amirat">
              <div className="overlay-amirat">
                <img src={amirat} className="amirat-img" alt="" />
                <div className="normal">
                  <div className="text-amirat">~ Yassine AMIRAT ~</div>
                </div>
                <div className="hover">
                  <div className="description-amirat">
                    Yassine AMIRAT est enseignant-chercheur dans le domaine de l'énergie exerçant à l'ISEN
                    Brest.
                  </div>
                </div>
                <div className="role-amirat">Tuteur académique</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transi-1-back"></div>
    </div>
  );
}
