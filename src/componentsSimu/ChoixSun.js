import React, { Component } from "react";
import { FaSolarPanel } from "react-icons/fa";
import { BsArrowBarRight } from "react-icons/bs";
import "./ChoixSun.css";
import { Navigate } from "react-router-dom";

export default class ChoixSun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilitysun: false,
    };

    this.toggleVisibilitysun = this.toggleVisibilitysun.bind(this);
  }

  toggleVisibilitysun() {
    this.setState((previousState) => ({
      visibilitysun: !previousState.visibilitysun,
    }));
  }

  render() {
    if (this.state.visibilitysun) {
      return (
        <div>
          <Navigate to="/simulation/sun" replace={true} />
        </div>
      );
    } else {
      return (
        <div className="choice2">
          <button
            className="choice-windturbine2"
            onClick={this.toggleVisibilitysun}
          >
            <span className="windturbine2">
              {" "}
              <FaSolarPanel size="40px" />
            </span>
            <span className="btn-windturbine2">SOLAIRE</span>
            <span className="arrow2">
              {" "}
              <BsArrowBarRight /> <BsArrowBarRight size="25px" />{" "}
            </span>
          </button>
        </div>
      );
    }
  }
}
