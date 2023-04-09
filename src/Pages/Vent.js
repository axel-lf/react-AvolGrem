import React, {Component} from "react";
import "./VentSunHydro.css"
import ConverterWatt from "./ConverterWatt";
import ConverterSpeed from "./ConverterSpeed";

export default class Vent extends Component {

  constructor() {
    super();
    this.state = { //Chaque Mois sera remplie par la valeur saisie par l'utilisateur
      Janvier: '',
      Fevrier: '',
      Mars: '',
      Avril: '',
      Mai: '',
      Juin: '',
      Juillet: '',
      Aout: '',
      Septembre: '',
      Octobre: '',
      Novembre: '',
      Decembre: '',
      Conso: '', //consomation annuelle entrée par l'utilisateur
      choix: '', //Choix proposé à l'utilisateur
      Puissance: '',
      Titre:'', 
      Texte1:'',
      Texte2:'',
      Texte3: '',
      Texte4: '',
      Texte5: '',
      Texte6: '',
      Texte7: '',
      Texte8: '',
      Prix_eol:'',
      LCOE:'',
      CO2:'',
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

  handleJanvier (e) {
    this.setState({Janvier: e.target.value});
  }
  handleFevrier (e) {
    this.setState({Fevrier: e.target.value});
  }
  handleMars (e) {
    this.setState({Mars: e.target.value});
  }
  handleAvril(e) {
    this.setState({Avril: e.target.value});
  }
  handleMai (e) {
    this.setState({Mai: e.target.value});
  }
  handleJuin (e) {
    this.setState({Juin: e.target.value});
  }
  handleJuillet (e) {
    this.setState({Juillet: e.target.value});
  }
  handleAout (e) {
    this.setState({Aout: e.target.value});
  }
  handleSeptembre (e) {
    this.setState({Septembre: e.target.value});
  }
  handleOctobre (e) {
    this.setState({Octobre: e.target.value});
  }
  handleNovembre (e) {
    this.setState({Novembre: e.target.value});
  }
  handleDecembre (e) {
    this.setState({Decembre: e.target.value});
  }
  handleConso (e) {
    this.setState({Conso: e.target.value});
  }

  CalculConsoAnnuel () {
    let moyVent;
    let Peol;
    let Peol_arrondi;
    let i=0; 
    let surface = 3.14 * 2.25;
    let lcoe_eol, moy_co2_eol,co2_eol,moy_lcoe_eol;
    let prix_eol= 18200;
    moyVent = (parseInt(this.state.Janvier)+parseInt(this.state.Fevrier)+parseInt(this.state.Mars)+parseInt(this.state.Avril)+parseInt(this.state.Mai)+parseInt(this.state.Juin)+parseInt(this.state.Juillet)+parseInt(this.state.Aout)+parseInt(this.state.Septembre)+parseInt(this.state.Octobre)+parseInt(this.state.Novembre)+parseInt(this.state.Decembre))/12;
    Peol=(1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27)*24*365;
    Peol_arrondi = Math.round(Peol * 100) / 100;
    co2_eol = (14.1*Peol)/1000;
    moy_co2_eol = Math.round(co2_eol * 10) / 10;
    lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
    moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;

    if ((this.state.Janvier === '') || (this.state.Fevrier === '') || (this.state.Mars === '') || (this.state.Avril === '') || (this.state.Mai === '') || (this.state.Juin === '') || (this.state.Juillet === '') || (this.state.Aout === '') || (this.state.Septembre === '') || (this.state.Octobre === '') || (this.state.Novembre === '') || (this.state.Decembre === '') || (this.state.Conso === '')) {
      this.setState({Texte1: "Veuillez rentrer toutes les informations nécessaires."})
    } 
    else {

      while (i<1) {

        if ((Peol >= this.state.Conso) && (moyVent >= 2.8)){
          this.setState({Puissance : Peol});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale l'Antaris 2.5 ."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }
        else {
          surface = 3.14 * 3.06;
          Peol=(1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27)*24*365;
          Peol_arrondi = Math.round(Peol * 100) / 100;
          prix_eol = 21500;
          co2_eol = (14.1*Peol)/1000;
          moy_co2_eol = Math.round(co2_eol * 10) / 10;
          lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
          moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;
          i+=1;
        }
      
        if ((Peol >= this.state.Conso) && (moyVent >= 2.8)){
          this.setState({Puissance : Peol_arrondi});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale l'Antaris 3.5 ."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }
        else {
          surface = 12.56;
          Peol=1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27*24*365;
          Peol_arrondi = Math.round(Peol * 100) / 100;
          prix_eol = 24050;
          co2_eol = (14.1*Peol)/1000;
          moy_co2_eol = Math.round(co2_eol * 10) / 10;
          lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
          moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;
          i+=1;
        }
      
        if ((Peol >= this.state.Conso) && (moyVent >= 2.8)){
          this.setState({Puissance : Peol_arrondi});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale l'Antaris 5.5 ."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }
        else {
          surface = 3.14 * 7.0225;
          Peol=1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27*24*365;
          Peol_arrondi = Math.round(Peol * 100) / 100;
          prix_eol = 31150;
          co2_eol = (14.1*Peol)/1000;
          moy_co2_eol = Math.round(co2_eol * 10) / 10;
          lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
          moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;
          i+=1;
        }
      
        if ((Peol >= this.state.Conso) && (moyVent >= 2.8)){
          this.setState({Puissance : Peol_arrondi});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale l'Antaris 7.5 ."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }
        else {
          surface = 3.14 * 10.5625;
          Peol=1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27*24*365;
          Peol_arrondi = Math.round(Peol * 100) / 100;
          prix_eol = 51900;
          co2_eol = (14.1*Peol)/1000;
          moy_co2_eol = Math.round(co2_eol * 10) / 10;
          lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
          moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;
          i+=1;
          
        }
        
        if ((Peol >= this.state.Conso) && (moyVent >= 2.8)){
          this.setState({Puissance : Peol_arrondi});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale l'Antaris 12 ."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }
        else {
          surface = 3.14 * 42.25;
          Peol=1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27*24*365;
          Peol_arrondi = Math.round(Peol * 100) / 100;
          prix_eol = 70000;
          co2_eol = (14.1*Peol)/1000;
          moy_co2_eol = Math.round(co2_eol * 10) / 10;
          lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
          moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;
          i+=1;
        }
      
        if ((Peol >= this.state.Conso) && (moyVent >= 3)){
          this.setState({Puissance : Peol_arrondi});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale est la Tuge 15."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }

        else {
          surface = 3.14 * 64;
          Peol=1/2*1.2*0.4*surface*Math.pow(moyVent, 3)*16/27*24*365;
          Peol_arrondi = Math.round(Peol * 100) / 100;
          prix_eol = 150000;
          co2_eol = (14.1*Peol)/1000;
          moy_co2_eol = Math.round(co2_eol * 10) / 10;
          lcoe_eol=((prix_eol+(1.5/100 * prix_eol)*20)/(Peol*20))
          moy_lcoe_eol = Math.round(lcoe_eol * 1000) / 1000;
          i+=1;
        }
      
        if ((Peol >= this.state.Conso) && (moyVent >= 3)){
          this.setState({Puissance : Peol_arrondi});
          this.setState({CO2 : moy_co2_eol});
          this.setState({LCOE : moy_lcoe_eol});
          this.setState({Prix_eol : prix_eol});
          this.setState({choix : "Afin de palier votre consomation électrique, l'éolienne idéale est la Tuge 60."})
          this.setState({Titre : "Solution proposée :"})
          this.setState({Texte1 : "Votre production annuelle sera d'envrion " });
          this.setState({Texte2 : " Watts." });
          this.setState({Texte3 : "L'éolienne vous couterait : "});
          this.setState({Texte4 : " euros. "});
          this.setState({Texte5 : "L'émission de CO2 totale sur un an de votre installation est d'environ "})
          this.setState({Texte6 : " grammes."})
          this.setState({Texte7 : "Votre LCOE sera est de "})
          this.setState({Texte8 : "€/kWh"})
          break;
        }
        else if ((moyVent>=0) && (moyVent<2.8)){
          this.setState({choix : "Votre exposition au vent ne permet pas l'installation d'une éolienne"})
          this.setState({Titre : ""})
          this.setState({Texte1 : ""});
          this.setState({Texte2 : ""});
          this.setState({Texte3 : ""});
          this.setState({Texte4 : ""});
          this.setState({Texte5 : ""})
          this.setState({Texte6 : ""})
          this.setState({Texte7 : ""})
          this.setState({Texte8 : ""})
          break;
        }
        else {
          this.setState({choix : "Votre consomation est trop importante, renseigné vous sur du grand éolien."})
          this.setState({Titre : ""})
          this.setState({Texte1 : ""});
          this.setState({Texte2 : ""});
          this.setState({Texte3 : ""});
          this.setState({Texte4 : ""});
          this.setState({Texte5 : ""})
          this.setState({Texte6 : ""})
          this.setState({Texte7 : ""})
          this.setState({Texte8 : ""})
        }
    }

    }

    
  }

  onSubmit = (event) => { //Il faut faire des fonction de choix pour l'algo et appeller ici une seule fonction qui appelle les autres.
    event.preventDefault()
    this.CalculConsoAnnuel(); //Fait que besoin d'appuyer deux fois sur le bouton
    
  }
  
  render() {
    return (
      <div className="element-simu">
        <br />
        <div className="titre-simu">
          Simulation Éolien
        </div>

        <div className="header-simu">
          Rentrez vos vitesses de vent par mois (en m/s).
        </div>

        <div className="vent">
          <div className="body-droite">
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
                <label htmlFor="Janvier">Janvier :</label>
                <input type="number"
                    className="form"
                    name="Janvier"
                    onChange={this.handleJanvier}
                    value={this.state.Janvier}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Fevrier">Fevrier :</label>
                <input type="number"
                    className="form"
                    name="Fevrier"
                    onChange={this.handleFevrier}
                    value={this.state.Fevrier}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Mars"> Mars :</label>
                <input type="number"
                    className="form"
                    name="Mars"
                    onChange={this.handleMars}
                    value={this.state.Mars}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Avril">Avril :</label>
                <input type="number"
                    className="form"
                    name="Avril"
                    onChange={this.handleAvril}
                    value={this.state.Avril}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Mai">Mai :</label>
                <input type="number"
                    className="form"
                    name="Mai"
                    onChange={this.handleMai}
                    value={this.state.Mai}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Juin">Juin :</label>
                <input type="number"
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
                <input type="number"
                    className="form"
                    name="Juillet"
                    onChange={this.handleJuillet}
                    value={this.state.Juillet}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Aout">Aout :</label>
                <input type="number"
                    className="form"
                    name="Aout"
                    onChange={this.handleAout}
                    value={this.state.Aout}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Septembre">Septembre :</label>
                <input type="number"
                    className="form"
                    name="Septembre"
                    onChange={this.handleSeptembre}
                    value={this.state.Septembre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Octobre">Octobre :</label>
                <input type="number"
                    className="form"
                    name="Octobre"
                    onChange={this.handleOctobre}
                    value={this.state.Octobre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Novembre">Novembre :</label>
                <input type="number"
                    className="form"
                    name="Novembre"
                    onChange={this.handleNovembre}
                    value={this.state.Novembre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Decembre">Decembre :</label>
                <input type="number"
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
                <label htmlFor="Conso">Rentrez votre consomation d'énergie sur un an (en W/h) :</label>
                <input type="number"
                    className="form2"
                    name="Conso"
                    onChange={this.handleConso}
                    value={this.state.Conso}
                />
          </div> 


          <div className="converter-watt"><ConverterWatt /></div>
          <br />
          <div className="conv_speed"><ConverterSpeed /></div>
         

          <p className="titre-affichage-choice-vent">{this.state.Titre}</p>
          <p className="affichage-choice-vent">{this.state.choix}</p>
          <p className="affichage-choice-vent">{this.state.Texte1}{this.state.Puissance}{this.state.Texte2}</p>
          <p className="affichage-choice-vent">{this.state.Texte3}{this.state.Prix_eol}{this.state.Texte4}</p>
          <p className="affichage-choice-vent">{this.state.Texte5}{this.state.CO2}{this.state.Texte6}</p>
          <p className="affichage-choice-vent">{this.state.Texte7}{this.state.LCOE}{this.state.Texte8}</p>


        </div>
      </div>
    )
  }
}


