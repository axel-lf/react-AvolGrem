import React, { Component } from "react";
import "./Alert.css";

export default class Alert extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false,
      };
  
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
  
    toggleVisibility() {
      this.setState((previousState) => ({
        visibility: !previousState.visibility,
      }));
    }
  
    render() {
      if (this.state.visibility) {
        return ("");
      } else {
        return (
            
            
            <div className="modal-content">
            <h2 className="h2_alert">Information</h2>
            <p className="p_alert">
                Pour une utilisation optimale, nous vous conseillons d'afficher cette page en plein écran.
            </p>
            <button className="close-alert" onClick={this.toggleVisibility}>
                Fermer
            </button>
            </div>
            
        );
      }
    }
  }
