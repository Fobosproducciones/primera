import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.svg";
import downArrow from "../../assets/icons/down-arrow.svg";

export default function Header() {
  return (
    <div>
      <header>
        <div className="header--container">
          <img
            auto-size
            src={logo}
            className="header--container-logo"
            alt="logo"
          ></img>
          <h1> La próxima revolución en el intercambio de criptomonedas. </h1>
          <p>
            Batabit te ayuda a navegar entre los diferentes precios y
            tendencias.
          </p>

          <a href="#plans" className="header--container-link">
            Conoce Nuestros Planes{" "}
            <span>
              <img src={downArrow} className="header-link__icon" alt="ba"></img>
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}
