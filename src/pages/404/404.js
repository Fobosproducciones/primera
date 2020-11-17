import React from "react";
import { Link } from "wouter";

import batata from "../../assets/icons/batata.svg";
import "./404.css";

export default function ErrorPage() {
  return (
    <div className="error--container">
      <h3>Batatabit</h3>
      <div id="bigBox">
        <img
          src={batata}
          id="box"
          className="error--container-img"
          alt="batata"
        ></img>
        <img
          src={batata}
          id="box2"
          className="error--container-img"
          alt="batata"
        ></img>
      </div>

      <div className="error--container-text">
        <h3>404: Not Found</h3>
        <p>No encontramos lo que buscabas.</p>
        <Link to="/">Volver al Home</Link>
      </div>
    </div>
  );
}
