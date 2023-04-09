import React from "react";
import "./Context.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Context() {
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay,
        duration: duration,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInTop("#context-title", 0.2, 2);
  }, []);

  useEffect(() => {
    slideInTop("#context-description", 0.2, 2);
  }, []);

  return (
    <div className="context-box">
      <div className="context-back">
        <div id="context-title" className="context-title">
          CONTEXTE
        </div>
        <div id="context-description" className="text-context">
          L’année 2022 a connu une crise énergétique sans précédent depuis les
          années 1970 en France et en Europe. Cette crise est dûe à l’envolée du
          prix du gaz mais aussi à une production totale d’énergie en France qui
          n’a jamais été aussi basse depuis 1992. Ceci est le reflet de la
          faible production nucléaire en recul de 30% par rapport à la moyenne
          des vingt dernières années. La disponibilité du parc nucléaire
          français s’est située à un niveau historiquement faible tout le long
          de l’année 2022 avec prés de 65% du parc à l’arrêt en août 2022.
          <br></br>
          Parallèlement, la production hydraulique a elle aussi atteint son plus
          bas niveau depuis 1976 en raison de la forte sécheresse de l’été 2022.
          Si les basses températures de cet hiver et la baisse de la
          consommation ont permis de limiter les dégâts, la hausse des prix
          reste très présente et problématique. <br></br>Le bilan carbone de
          l’électricité consommée quant à lui n’est pas significativement
          dégradé et reste inférieur à celui des pays comparables. <br></br>Dans
          ce contexte, la transition énergétique continue. 2022 voit un volume
          record d’énergies renouvelables installées mais une accélération
          demeure nécessaire pour atteindre les objectifs fixés par les pouvoirs
          publics.
        </div>
      </div>
      <div className="key-figures-box">
        <div className="key-figures-title-back">
          <div className="key-figures-title">CHIFFRES CLÉS</div>
          <div className="key-figures-table-box">
            <table className="key-figures-table">
              <th className="col1">
                <tr className="col1-lg1">
                  <div className="chiffre">5</div>
                  <div className="unite">GW</div>
                </tr>
                <tr className="col1-lg2">
                  <div className="col1-lg2-txt">
                    L'année 2022 a été marquée par le record de mise en service
                    d'installations renouvelables. <br></br> 5 GW est le chiffre
                    représentant la transition énergétique croissante du pays.
                    Il a fait passer de 10,7GW à 15,7GW la puissance installée
                    des parcs éoliens et solaires en France Chaque année, de
                    plus en plus de dispositifs renouvelables sont installés
                    dans le but d'atteindre les objectifs fixés par le
                    gouvernement à l'horizon 2030.<br></br>
                    Le premier parc éolien "off-shore" (en mer) situé à
                    St-Nazaire a permis une augmentation de la puissance
                    installée de 480MW. <br></br>
                    L'augmentation de 4,5GW restant se partage entre les
                    installations solaires (+2,6GW) et éoliennes (+1,9GW).
                    <br></br>Les énergies renouvelables contribuent à la
                    décarbonisation structurelle du mix énergétique et à la
                    sécurité d'approvisionnement de notre pays.
                  </div>
                </tr>
              </th>
              <th className="col2">
                <tr className="col2-lg1">
                  <div className="chiffre">25</div>
                  <div className="unite">MtCO2eq</div>
                </tr>
                <tr className="col2-lg2">
                  <div className="col2-lg2-txt">
                    En 2022, les émissions de gaz à effet de serre du système
                    électrique français ont atteint 25 MtCO2eq contre 21,5
                    MtCO2eq en 2021 : une hausse de 14%. <br></br> Cette
                    augmentation est due à une intensification de la production
                    d'électricité par le gaz. De part la faible production
                    hydraulique et nucléaire, le gaz a remplacé cette année
                    l'éolien à la troisième place du podium des sources de
                    production d'électricité en France.<br></br>Malgré cette
                    importante hausse, le parc électrique français compte parmis
                    les plus décarbonnés d'Europe.<br></br>A titre d'exemple,
                    l'intensité en émission de la production électrique
                    française est de 56gCO2eq/KWh contre 120gCO2eq/KWh en
                    Belgique, 184gCO2eq/KWh en Angleterre et 387gCO2eq/KWh en
                    Allemagne.{" "}
                  </div>
                </tr>
              </th>
              <th className="col3">
                <tr className="col3-lg1">
                  <div className="chiffre">612</div>
                  <div className="unite">€/MWh</div>
                </tr>
                <tr className="col3-lg2">
                  <div className="col3-lg2-txt">
                    612 €/MWh est la moyenne du prix du MWh la semaine du 22
                    août 2022, un record. <br></br>Tandis que la production
                    électrique hydraulique et nucléaire étaient au plus bas, les
                    prix du MWh se sont envolés. L'évolution du prix des
                    énergies fossiles due à la crise énergétique européenne
                    contribue largement à cette augmentation du prix du MWh en
                    France.
                    <br></br>Cependant, septembre 2022 a vu le prix du MWh
                    décroitre bien qu'il reste largement au dessus des prix des
                    années précédentes.
                  </div>
                </tr>
              </th>
            </table>
          </div>
        </div>
        <div className="rte">Source : Bilan électrique 2022, RTE</div>
      </div>
    </div>
  );
}
