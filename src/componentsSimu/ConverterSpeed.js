import React, { Component } from "react";
import "./ConverterSpeed.css";

export default class ConverterSpeed extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: "speed", val: "" };
  }

  handlekiloSpeed = (e) => {
    this.setState({ scale: "Km/h", val: e.target.value });
  };

  handleSpeed = (e) => {
    this.setState({ scale: "m/s", val: e.target.value });
  };

  render() {
    const val = this.state.val;
    const scale = this.state.scale;
    const kiloSpeed = scale === "m/s" ? Math.round(val * 3.6 * 100) / 100 : val;
    const Speed = scale === "Km/h" ? Math.round((val / 3.6) * 100) / 100 : val;

    return (
      <fieldset className="fieldset-convertspeed">
        <legend>Convertisseur Km/h / m/s</legend>

        <div>
          <legend className="legend-converter-kspeed">Km/h </legend>
          <input
            className="input-converter-kspeed"
            type="number"
            value={kiloSpeed}
            onChange={this.handlekiloSpeed}
          ></input>
        </div>

        <div>
          <legend className="legend-converter-speed">m/s </legend>
          <input
            className="input-converter-speed"
            type="number"
            value={Speed}
            onChange={this.handleSpeed}
          ></input>
        </div>

        <p className="texte-converterspeed"> Vaut </p>
      </fieldset>
    );
  }
}
