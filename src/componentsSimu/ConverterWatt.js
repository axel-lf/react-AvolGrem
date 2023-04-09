import React, { Component } from "react";
import "./ConverterWatt.css";

export default class ConverterWatt extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: "kiloWatt", val: "" };
  }

  handlekiloWatt = (e) => {
    this.setState({ scale: "kW", val: e.target.value });
  };

  handleWatt = (e) => {
    this.setState({ scale: "W", val: e.target.value });
  };

  render() {
    const val = this.state.val;
    const scale = this.state.scale;
    const kiloWatt = scale === "W" ? Math.round((val / 1000) * 100) / 100 : val;
    const Watt = scale === "kW" ? Math.round(val * 1000 * 100) / 100 : val;

    return (
      <fieldset className="fieldset-convertwatt">
        <legend>Convertisseur kiloWatt / Watt</legend>

        <div>
          <legend className="legend-converter-kwatt">kiloWatt (kW) </legend>
          <input
            className="input-converter-kwatt"
            type="number"
            value={kiloWatt}
            onChange={this.handlekiloWatt}
          ></input>
        </div>

        <div>
          <legend className="legend-converter-watt">Watts (W)</legend>
          <input
            className="input-converter-watt"
            type="number"
            value={Watt}
            onChange={this.handleWatt}
          ></input>
        </div>

        <p className="texte-converterwatt"> Vaut </p>
      </fieldset>
    );
  }
}
