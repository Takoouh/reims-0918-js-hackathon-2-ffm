import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="main_container_navbar d-flex flex-column align-items-end">
        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3000 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/tableau-de-jeux">
                <i className="fas fa-gamepad" /> Jouer
            </Link>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3200 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/connection">
                <i className="fas fa-gamepad" /> Se connecter
              </Link>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3400 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/inscription">
                <i className="fas fa-gamepad" /> S'inscrire
              </Link>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3600 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/profil">
                <i className="fas fa-user" /> Profil
              </Link>
            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3800 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/tableau-des-scores">
                <i className="fas fa-trophy" /> Classement
              </Link>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Navbar;
