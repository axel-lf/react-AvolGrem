import React, { Component } from "react";
import { SiTurbosquid } from "react-icons/si";
import { BsArrowBarRight } from "react-icons/bs";
import "./ChoixHydro.css";
import { Navigate } from "react-router-dom";

export default class ChoixHydro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityhydro: false,
    };

    this.toggleVisibilityhydro = this.toggleVisibilityhydro.bind(this);
  }

  toggleVisibilityhydro() {
    this.setState((previousState) => ({
      visibilityhydro: !previousState.visibilityhydro,
    }));
  }

  render() {
    if (this.state.visibilityhydro) {
      return (
        <div>
          <Navigate to="/simulation/hydro" replace={true} />
        </div>
      );
    } else {
      return (
        <div className="choice3">
          <button
            className="choice-windturbine3"
            onClick={this.toggleVisibilityhydro}
          >
            <span className="windturbine3">
              {" "}
              <SiTurbosquid size="40px" />
            </span>
            <span className="btn-windturbine3">HYDROLIEN</span>
            <span className="arrow3">
              {" "}
              <BsArrowBarRight /> <BsArrowBarRight size="25px" />{" "}
            </span>
          </button>
        </div>
      );
    }
  }
}
