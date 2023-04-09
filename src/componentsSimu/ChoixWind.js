import React, { Component } from "react";
import { GiWindTurbine } from "react-icons/gi";
import { BsArrowBarRight } from "react-icons/bs";
import "./ChoixWind.css";
import { Navigate } from "react-router-dom";

export default class ChoixWind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilitywind: false,
    };

    this.toggleVisibilitywind = this.toggleVisibilitywind.bind(this);
  }

  toggleVisibilitywind() {
    this.setState((previousState) => ({
      visibilitywind: !previousState.visibilitywind,
    }));
  }

  render() {
    if (this.state.visibilitywind) {
      return (
        <div>
          <Navigate to="/simulation/vent" replace={true} />
        </div>
      );
    } else {
      return (
        <div className="choice1">
          <button
            className="choice-windturbine1"
            onClick={this.toggleVisibilitywind}
          >
            <span className="windturbine1">
              {" "}
              <GiWindTurbine size="40px" />
            </span>
            <span className="btn-windturbine1">ÉOLIEN</span>
            <span className="arrow1">
              {" "}
              <BsArrowBarRight /> <BsArrowBarRight size="25px" />{" "}
            </span>
          </button>
        </div>
      );
    }
  }
}
