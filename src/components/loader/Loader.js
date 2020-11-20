import React from "react";
import "./Loader.css";
import logo from "../../assets/img/logo.svg";

export default function Loader() {
  return (
    <div className="loader">
      <img auto-size src={logo} className="loader--logo" alt="logo"></img>
      <h4>Cargando contenido...</h4>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
