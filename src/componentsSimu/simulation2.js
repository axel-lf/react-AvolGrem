import React from "react";
import "./simulation2.css";
import ChoixWind from "../componentsSimu/ChoixWind";
import ChoixSun from "../componentsSimu/ChoixSun";
import ChoixHydro from "../componentsSimu/ChoixHydro";

export default function Simulation2() {
  return (
    <div className="simu-box">
      <div className="guide-title-back">
        <div className="guide-title">GUIDE DE LA SIMULATION</div>
      </div>
      <div className="img-simu"></div>
      <div className="choix-back">
        <div className="simu-sentence">
          {" "}
          Parmis les ressources renouvelables suivantes, choisissez celle que
          vous voulez simuler :{" "}
        </div>
        <div className="simu-btn-box">
          <div className="simu-col1">
            <ChoixWind />
          </div>
          <div className="simu-col2">
            <ChoixSun />
          </div>
          <div className="simu-col3">
            <ChoixHydro />
          </div>
        </div>
      </div>
      <div className="title-back-lcoe-co2">
        <div className="title-lcoe-co2">INFORMATIONS LCOE ET CO2</div>
      </div>
      <div className="case-lcoe-co2">
        <table className="table-LCOE-CO2">
          <tr>
            <th className="img-LCOE"></th>
            <th className="txt-LCOE">
              Les coûts actualisés du KWh (ou LCOE : Levelized cost of energy)
              est un indicateur du prix global d’une énergie sur la durée de vie
              de l’équipement qui la produit. Il prend en compte l’ensemble des
              coûts et productions de l’équipement. Le LCOE est en résumé un
              indicateur pour comparer les compétitivités des différentes
              technologies de production d'électricité sur des bases cohérentes.
            </th>
          </tr>
        </table>
        <table className="table-LCOE-CO2">
          <tr>
            <th className="txt-CO2">
              Le CO2 (ou dioxyde de carbone) est un gaz incolore et indolore
              contenu naturellement dans l'air. L'activité humaine engendre une
              libération importante de CO2 dans l'atmosphère ce qui impact
              négativement la biodiversité. Ce gaz est un facteur dominant de
              l'augmentation de l'effet de serre. Les émissions de dioxyde de
              carbone générées par les dispositifs renouvelables vous donnent
              une idée de leur impact sur l'environnement.
            </th>
            <th className="img-CO2"></th>
          </tr>
        </table>
      </div>
    </div>
  );
}
