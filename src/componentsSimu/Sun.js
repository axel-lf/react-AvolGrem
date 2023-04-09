import React, { Component } from "react";
import "./VentSunHydro.css";
import ConverterWatt from "./ConverterWatt";

export default class Sun extends Component {
  constructor() {
    super();
    this.state = {
      //Chaque Mois sera remplie par la valeur saisie par l'utilisateur
      Janvier: "",
      Fevrier: "",
      Mars: "",
      Avril: "",
      Mai: "",
      Juin: "",
      Juillet: "",
      Aout: "",
      Septembre: "",
      Octobre: "",
      Novembre: "",
      Decembre: "",
      Coeff: "",
      Conso: "", // Consomation annuelle entrée par l'utilisateur
      choix: "", // Choix proposé à l'utilisateur
      Surface: "", // Surface de toit disponible
      Texte1: "", // Début de la phrase suite à l'algo
      Texte2: "", //Fin de la phrase suite à l'algo
      Texte3: "",
      Texte4: "",
      Texte5: "",
      Texte6: "",
      Texte7: "",
      Texte8: "",
      Titre: "",
      Prix: "",
      LCOE: "",
      CO2: "",
      Panneau: "",
    };

    this.handleJanvier = this.handleJanvier.bind(this);
    this.handleFevrier = this.handleFevrier.bind(this);
    this.handleMars = this.handleMars.bind(this);
    this.handleAvril = this.handleAvril.bind(this);
    this.handleMai = this.handleMai.bind(this);
    this.handleJuin = this.handleJuin.bind(this);
    this.handleJuillet = this.handleJuillet.bind(this);
    this.handleAout = this.handleAout.bind(this);
    this.handleSeptembre = this.handleSeptembre.bind(this);
    this.handleOctobre = this.handleOctobre.bind(this);
    this.handleNovembre = this.handleNovembre.bind(this);
    this.handleDecembre = this.handleDecembre.bind(this);
    this.handleConso = this.handleConso.bind(this);
    this.handleSurface = this.handleSurface.bind(this);
    this.handleCoeff = this.handleCoeff.bind(this);
  }

  handleJanvier(e) {
    this.setState({ Janvier: e.target.value });
  }
  handleFevrier(e) {
    this.setState({ Fevrier: e.target.value });
  }
  handleMars(e) {
    this.setState({ Mars: e.target.value });
  }
  handleAvril(e) {
    this.setState({ Avril: e.target.value });
  }
  handleMai(e) {
    this.setState({ Mai: e.target.value });
  }
  handleJuin(e) {
    this.setState({ Juin: e.target.value });
  }
  handleJuillet(e) {
    this.setState({ Juillet: e.target.value });
  }
  handleAout(e) {
    this.setState({ Aout: e.target.value });
  }
  handleSeptembre(e) {
    this.setState({ Septembre: e.target.value });
  }
  handleOctobre(e) {
    this.setState({ Octobre: e.target.value });
  }
  handleNovembre(e) {
    this.setState({ Novembre: e.target.value });
  }
  handleDecembre(e) {
    this.setState({ Decembre: e.target.value });
  }
  handleConso(e) {
    this.setState({ Conso: e.target.value });
  }
  handleSurface(e) {
    this.setState({ Surface: e.target.value });
  }
  handleCoeff(e) {
    this.setState({ Coeff: e.target.value });
  }

  CalculConsoAnnuel() {
    let nbr_panneau = 1;
    let moyIrra;
    let surface_panneau;
    let PPV;
    let lcoe, moy_co2, moy_lcoe, co2;
    let coeff = parseFloat(this.state.Coeff) / 100;
    let prix = 640;
    moyIrra =
      parseFloat(this.state.Janvier) +
      parseFloat(this.state.Fevrier) +
      parseFloat(this.state.Mars) +
      parseFloat(this.state.Avril) +
      parseFloat(this.state.Mai) +
      parseFloat(this.state.Juin) +
      parseFloat(this.state.Juillet) +
      parseFloat(this.state.Aout) +
      parseFloat(this.state.Septembre) +
      parseFloat(this.state.Octobre) +
      parseFloat(this.state.Novembre) +
      parseFloat(this.state.Decembre);
    surface_panneau = 1.94;
    PPV = surface_panneau * moyIrra * coeff * 0.22;
    co2 = (PPV * 43.9) / 1000;
    moy_co2 = Math.round(co2 * 10) / 10;
    lcoe = (prix + ((PPV * 7) / 1000) * 40) / (PPV * 40);
    moy_lcoe = Math.round(lcoe * 1000) / 1000;

    if (
      this.state.Janvier === "" ||
      this.state.Fevrier === "" ||
      this.state.Mars === "" ||
      this.state.Avril === "" ||
      this.state.Mai === "" ||
      this.state.Juin === "" ||
      this.state.Juillet === "" ||
      this.state.Aout === "" ||
      this.state.Septembre === "" ||
      this.state.Octobre === "" ||
      this.state.Novembre === "" ||
      this.state.Decembre === "" ||
      this.state.Conso === ""
    ) {
      this.setState({
        Texte1: "Veuillez entrer toutes les informations nécessaires.",
      });
    } else {
      this.setState({ Prix: prix });
      this.setState({ choix: nbr_panneau });
      this.setState({ CO2: moy_co2 });
      this.setState({ LCOE: moy_lcoe });
      this.setState({ Panneau: "" });
      this.setState({ Titre: "Solution proposée :" });
      this.setState({
        Texte1: "Avec votre surface disponible, vous aurez besoin de ",
      });
      this.setState({
        Texte2:
          " panneau photovoltaïque pour assurer la totalité de votre consommation électrique annuelle.",
      });
      this.setState({
        Texte3: "Cette intallation vous coûterait en panneaux solaires : ",
      });
      this.setState({ Texte4: " euros." });
      this.setState({
        Texte5:
          "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
      });
      this.setState({ Texte6: " Kilogrammes." });
      this.setState({ Texte7: "Le LCOE de cette installation est de " });
      this.setState({ Texte8: "€/kWh" });
    }

    while (PPV < parseFloat(this.state.Conso)) {
      if (surface_panneau >= parseFloat(this.state.Surface)) {
        let moyenne;
        let moyenne_arrondi;
        let prix;
        nbr_panneau = nbr_panneau - 1;
        surface_panneau = 1.94 * nbr_panneau;
        PPV = surface_panneau * moyIrra * coeff * 0.22;
        moyenne = (PPV / parseFloat(this.state.Conso)) * 100;
        moyenne_arrondi = Math.round(moyenne * 100) / 100;
        prix = nbr_panneau * 640;
        co2 = (PPV * 43.9) / 1000;
        moy_co2 = Math.round(co2 * 10) / 10;
        lcoe = (prix + ((PPV * 7) / 1000) * 40) / (PPV * 40);
        moy_lcoe = Math.round(lcoe * 1000) / 1000;
        this.setState({ CO2: moy_co2 });
        this.setState({ LCOE: moy_lcoe });
        this.setState({ choix: moyenne_arrondi });
        this.setState({ Prix: prix });
        this.setState({ Panneau: nbr_panneau });
        this.setState({ Titre: "Solution proposée :" });
        this.setState({
          Texte1: "Avec votre surface disponible, vous allez pouvoir assurer ",
        });
        this.setState({
          Texte2: "% de votre consommation électrique annuelle. Soit ",
        });
        this.setState({
          Texte3: "Cette simulation vous coûterait en panneaux solaires : ",
        });
        this.setState({ Texte4: " euros." });
        this.setState({
          Texte5:
            "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
        });
        this.setState({ Texte6: " Kilogrammes." });
        this.setState({ Texte7: "Le LCOE de cette installation est de " });
        this.setState({ Texte8: "€/kWh" });
        this.setState({ Texte9: " panneaux photovoltaïques" });
        //ajouter le nombre de panneaux
        break;
      } else {
        nbr_panneau = nbr_panneau + 1;
        surface_panneau = 1.94 * nbr_panneau;
        PPV = surface_panneau * moyIrra * coeff * 0.22;
        prix = nbr_panneau * 640;
        co2 = (PPV * 43.9) / 1000;
        moy_co2 = Math.round(co2 * 10) / 10;
        lcoe = (prix + ((PPV * 7) / 1000) * 40) / (PPV * 40);
        moy_lcoe = Math.round(lcoe * 1000) / 1000;
        this.setState({ CO2: moy_co2 });
        this.setState({ LCOE: moy_lcoe });
        this.setState({ Prix: prix });
        this.setState({ choix: nbr_panneau });
        this.setState({ Panneau: "" });
        this.setState({ Titre: "Solution proposée :" });
        this.setState({
          Texte1: "Avec votre surface disponible, vous aurez besoin de ",
        });
        this.setState({
          Texte2:
            " panneaux photovoltaïques pour assurer la totalité de votre consomation électrique annuelle.",
        });
        this.setState({
          Texte3: "Cette simulation vous coûterait en panneaux solaires : ",
        });
        this.setState({ Texte4: " euros. " });
        this.setState({
          Texte5:
            "L'émission de CO2 totale de votre installation sur un an sera d'environ ",
        });
        this.setState({ Texte6: " Kilogrammes." });
        this.setState({ Texte7: "Le LCOE de cette installation est de " });
        this.setState({ Texte8: "€/kWh" });
        continue;
      }
    }
  }

  onSubmit = (event) => {
    //Il faut faire des fonction de choix pour l'algo et appeller ici une seule fonction qui appelle les autres.
    event.preventDefault();
    this.CalculConsoAnnuel(); //Fait que besoin d'appuyer deux fois sur le bouton
  };

  render() {
    return (
      <div className="element-simu">
        <br />
        <div className="titre-simu">Simulation Panneaux photovoltaïques</div>

        <div className="header-simu">
          Entrez pour chaque mois l'irriadiation sur plan (en kWh/m2) :
        </div>

        <div className="vent">
          <div className="body-droite">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Janvier">Janvier :</label>
                <input
                  type="number"
                  className="form"
                  name="Janvier"
                  onChange={this.handleJanvier}
                  value={this.state.Janvier}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Fevrier">Février :</label>
                <input
                  type="number"
                  className="form"
                  name="Fevrier"
                  onChange={this.handleFevrier}
                  value={this.state.Fevrier}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Mars"> Mars :</label>
                <input
                  type="number"
                  className="form"
                  name="Mars"
                  onChange={this.handleMars}
                  value={this.state.Mars}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Avril">Avril :</label>
                <input
                  type="number"
                  className="form"
                  name="Avril"
                  onChange={this.handleAvril}
                  value={this.state.Avril}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Mai">Mai :</label>
                <input
                  type="number"
                  className="form"
                  name="Mai"
                  onChange={this.handleMai}
                  value={this.state.Mai}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Juin">Juin :</label>
                <input
                  type="number"
                  className="form"
                  name="Juin"
                  onChange={this.handleJuin}
                  value={this.state.Juin}
                />
              </div>

              <div className="container">
                <button className="button">
                  <span> Valider </span>
                </button>
              </div>
            </form>
          </div>

          <div className="body-gauche">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Juillet">Juillet :</label>
                <input
                  type="number"
                  className="form"
                  name="Juillet"
                  onChange={this.handleJuillet}
                  value={this.state.Juillet}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Aout">Août :</label>
                <input
                  type="number"
                  className="form"
                  name="Aout"
                  onChange={this.handleAout}
                  value={this.state.Aout}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Septembre">Septembre :</label>
                <input
                  type="number"
                  className="form"
                  name="Septembre"
                  onChange={this.handleSeptembre}
                  value={this.state.Septembre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Octobre">Octobre :</label>
                <input
                  type="number"
                  className="form"
                  name="Octobre"
                  onChange={this.handleOctobre}
                  value={this.state.Octobre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Novembre">Novembre :</label>
                <input
                  type="number"
                  className="form"
                  name="Novembre"
                  onChange={this.handleNovembre}
                  value={this.state.Novembre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Decembre">Décembre :</label>
                <input
                  type="number"
                  className="form"
                  name="Decembre"
                  onChange={this.handleDecembre}
                  value={this.state.Decembre}
                />
              </div>
            </form>
          </div>

          <br />

          <div className="form-conso">
            <label htmlFor="Conso">
              Entrez votre consommation électrique sur un an (en kWh) :
            </label>
            <input
              type="number"
              className="form2"
              name="Conso"
              onChange={this.handleConso}
              value={this.state.Conso}
            />
          </div>

          <div className="form-conso">
            <label htmlFor="Conso">
              Veuillez entrer le facteur de correction correspondant à <br />{" "}
              votre orientation et inclinaison de panneau (sans le %):
            </label>
            <input
              type="number"
              className="form2"
              name="Conso"
              onChange={this.handleCoeff}
              value={this.state.Coeff}
            />
          </div>

          <div className="form-conso">
            <label htmlFor="Conso">
              Entrez votre surface disponible pour l'installation de panneaux
              photovoltaïques (en m2):
            </label>
            <input
              type="number"
              className="form2"
              name="Conso"
              onChange={this.handleSurface}
              value={this.state.Surface}
            />
          </div>

          <fieldset className="fieldset-tab">
            <legend>Facteur de correction d'ensoleillement</legend>
            <div className="table_coeff"></div>
          </fieldset>

          <div className="convert-sun">
            <div className="converter-watt">
              <ConverterWatt />
            </div>
          </div>

          <p className="titre-affichage-choice-sun">{this.state.Titre}</p>
          <p className="affichage-choice-sun">
            {this.state.Texte1}
            {this.state.choix}
            {this.state.Texte2}
            {this.state.Panneau}
          </p>
          <p className="affichage-choice-sun">
            {this.state.Texte3}
            {this.state.Prix}
            {this.state.Texte4}
          </p>
          <p className="affichage-choice-sun">
            {this.state.Texte5}
            {this.state.CO2}
            {this.state.Texte6}
          </p>
          <p className="affichage-choice-sun">
            {this.state.Texte7}
            {this.state.LCOE}
            {this.state.Texte8}
          </p>
        </div>
      </div>
    );
  }
}
