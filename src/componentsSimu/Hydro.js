import React, { Component } from "react";
import "./VentSunHydro.css";
import ConverterWatt from "./ConverterWatt";
import ConverterSpeed from "./ConverterSpeed";

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
      Conso: "", //consomation annuelle entrée par l'utilisateur
      choix: "", //Choix proposé à l'utilisateur
      Titre: "",
      Texte1: "",
      Texte2: "",
      Texte3: "",
      Texte4: "",
      Texte5: "",
      Texte6: "",
      Texte7: "",
      Texte8: "",
      Texte9: "",
      Puissance: "",
      CO2: "",
      LCOE: "",
      Prix_hyd: "",
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

  CalculConsoAnnuel() {
    let moyHydro;
    let Phydro;
    let Phydro_arrondi, Phydro_kw;
    let i = 0;
    let lcoe_hyd, moy_co2_hyd, co2_hyd, moy_lcoe_hyd;
    let prix_hyd;
    let surface = 3.14 * 0.14 * 0.14;
    moyHydro =
      (parseFloat(this.state.Janvier) +
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
        parseFloat(this.state.Decembre)) /
      12;
    Phydro =
      (1 / 2) * 0.4 * 997 * surface * moyHydro * moyHydro * moyHydro * 24 * 365;

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
      this.setState({ Titre: "" });
      this.setState({ choix: "" });
      this.setState({ Texte2: "" });
      this.setState({ Texte3: "" });
      this.setState({ Texte4: "" });
      this.setState({ Texte5: "" });
      this.setState({ Texte6: "" });
      this.setState({ Texte7: "" });
      this.setState({ Texte8: "" });
      this.setState({ Texte9: "" });
      this.setState({ Puissance: "" });
      this.setState({ CO2: "" });
      this.setState({ LCOE: "" });
      this.setState({ Prix_hyd: "" });
    } else {
      while (i < 1) {
        if (Phydro >= this.state.Conso * 1000) {
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          prix_hyd = 2700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consommation électrique, l'installation d'une hydrolienne Setur-M serait idéale.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'hydrolienne vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        }

        if (2 * Phydro >= this.state.Conso * 1000) {
          Phydro = Phydro * 2;
          prix_hyd = 2 * 2700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consomation électrique, l'installation de 2 hydroliennes Setur-M serait requise.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        }

        if (3 * Phydro >= this.state.Conso * 1000) {
          Phydro = Phydro * 3;
          prix_hyd = 3 * 2700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consomation électrique, l'installation de 3 hydroliennes Setur-M serait requise.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        }

        if (4 * Phydro >= this.state.Conso * 1000) {
          Phydro = Phydro * 4;
          prix_hyd = 4 * 2700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consomation électrique, l'installation de 4 hydroliennes Setur-M serait requise.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        } else {
          i += 1;
          surface = 3.14 * 0.32 * 0.32;
          Phydro =
            (1 / 2) *
            0.4 *
            997 *
            surface *
            moyHydro *
            moyHydro *
            moyHydro *
            24 *
            365;
        }
        if (Phydro >= this.state.Conso * 1000) {
          prix_hyd = 20700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consommation électrique, l'installation d'une hydrolienne Setur-L serait idéale.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'hydrolienne vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        } else {
          i += 1;
          surface = 3.14 * 0.33 * 0.33;
          Phydro =
            (1 / 2) *
            0.4 *
            997 *
            surface *
            moyHydro *
            moyHydro *
            moyHydro *
            24 *
            365;
        }

        if (Phydro >= this.state.Conso * 1000 && moyHydro <= 3) {
          prix_hyd = 50000;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consommation électrique, l'installation d'une hydrolienne Poseide 66 serait idéale.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'hydrolienne vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        } else {
          i += 1;
          surface = 3.14 * 0.32 * 0.32;
          Phydro =
            (1 / 2) *
            0.4 *
            997 *
            surface *
            moyHydro *
            moyHydro *
            moyHydro *
            24 *
            365;
        }

        if (2 * Phydro >= this.state.Conso * 1000) {
          Phydro = Phydro * 2;
          prix_hyd = 2 * 20700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consomation électrique, l'installation de 2 hydroliennes Setur-L serait requise.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        }

        if (3 * Phydro >= this.state.Conso * 1000) {
          Phydro = Phydro * 3;
          prix_hyd = 3 * 20700;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consomation électrique, l'installation de 3 hydroliennes Setur-L serait requise.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        } else {
          i += 1;
          surface = 3.14 * 0.77 * 0.77;
          Phydro =
            (1 / 2) *
            0.4 *
            997 *
            surface *
            moyHydro *
            moyHydro *
            moyHydro *
            24 *
            365;
        }

        if (Phydro >= this.state.Conso * 1000) {
          prix_hyd = 90000;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consommation électrique, l'installation d'une hydrolienne Poseide 144 serait idéale.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'hydrolienne vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        }

        if (2 * Phydro >= this.state.Conso * 1000) {
          Phydro = Phydro * 2;
          prix_hyd = 90000 * 2;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          this.setState({ Puissance: Phydro_arrondi });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix:
              "Afin de palier votre consommation électrique, l'installation de 2 hydroliennes Poseide 144 serait requise.",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({
            Texte1: "La production annuelle de l'installation sera de ",
          });
          this.setState({ Texte2: " KWh." });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
          break;
        } else {
          i += 1;
          Phydro = Phydro * 2;
          prix_hyd = 90000 * 2;
          co2_hyd = (8 * Phydro) / 1000 / 1000;
          Phydro_kw = Phydro / 1000;
          Phydro_arrondi = Math.round(Phydro_kw * 100) / 100;
          moy_co2_hyd = Math.round(co2_hyd * 10) / 10;
          lcoe_hyd =
            (prix_hyd + 1.4 * (2 / 100) * prix_hyd * 20) / (Phydro_kw * 20);
          moy_lcoe_hyd = Math.round(lcoe_hyd * 1000) / 1000;
          let moyenne_hydro = (Phydro_kw / parseFloat(this.state.Conso)) * 100;
          let moyenne_arrondi_hydro = Math.round(moyenne_hydro * 100) / 100;
          this.setState({ Puissance: moyenne_arrondi_hydro });
          this.setState({ CO2: moy_co2_hyd });
          this.setState({ LCOE: moy_lcoe_hyd });
          this.setState({ Prix_hyd: prix_hyd });
          this.setState({
            choix: "",
          });
          this.setState({ Titre: "Solution proposée :" });
          this.setState({ Texte1: "Vous pouvez assurer " });
          this.setState({
            Texte2: " % de votre consommation avec 2 hydroliennes Poseide 144.",
          });
          this.setState({ Texte3: "L'installation vous coûterait : " });
          this.setState({ Texte4: " euros. " });
          this.setState({
            Texte5:
              "L'émission de CO2 totale de cette installation sur un an sera d'environ ",
          });
          this.setState({ Texte6: " Kilogrammes." });
          this.setState({ Texte7: "Le LCOE de cette installation est de " });
          this.setState({ Texte8: "€/kWh" });
          this.setState({
            Texte9:
              "Infomation : étant donné le peu de recul existant sur les hydroliennes, la valeur du LCOE est à prendre avec précaution.",
          });
        }
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
      <div className="element-simu-hydro-eol">
        <br />
        <div className="titre-simu">Simulation Hydrolienne.</div>

        <div className="header-simu">
          Entrez pour chaque mois la vitesse moyenne de votre cours d'eau (en
          m/s).
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

              <div className="container-vent">
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
              Entrez votre consommation d'énergie (électrique) sur un an (en
              kWh) :
            </label>
            <input
              type="number"
              className="form2"
              name="Conso"
              onChange={this.handleConso}
              value={this.state.Conso}
            />
          </div>

          <div className="convert-vent">
            <div className="converter-watt-vent">
              <ConverterWatt />
            </div>
            <div className="conv_speed-vent">
              <ConverterSpeed />
            </div>
          </div>

          <p className="titre-affichage-choice-hydro">{this.state.Titre}</p>
          <p className="affichage-choice-hydro">{this.state.choix}</p>
          <p className="affichage-choice-vent">
            {this.state.Texte1}
            {this.state.Puissance}
            {this.state.Texte2}
          </p>
          <p className="affichage-choice-vent">
            {this.state.Texte3}
            {this.state.Prix_hyd}
            {this.state.Texte4}
          </p>
          <p className="affichage-choice-vent">
            {this.state.Texte5}
            {this.state.CO2}
            {this.state.Texte6}
          </p>
          <p className="affichage-choice-vent">
            {this.state.Texte7}
            {this.state.LCOE}
            {this.state.Texte8}
          </p>
          <p className="affichage-LCOE">{this.state.Texte9}</p>
        </div>
      </div>
    );
  }
}
