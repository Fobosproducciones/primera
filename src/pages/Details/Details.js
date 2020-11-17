import React from "react";
import { Link } from "wouter";
import "./Details.css";
import logo from "../../assets/img/logo.svg";
import Footer from "../../components/footer/Footer";

export default function Details() {
  const handleForm = (e) => {
    e.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    alert("Tus datos se han registrado correctamente!");
  };
  return (
    <>
      <div className="form">
        <img src={logo} className="form--logo" alt="logo"></img>
        <div className="form--title">
          <h3>Gracias por elegir nuestro servicio.</h3>
          <p>
            Completa tus datos y un representante se comunicará contigo a la
            brevedad.
          </p>
        </div>
        <form onSubmit={handleForm} className="form--container">
          <label for="username">Nombre:</label>
          <input
            tipe="text"
            id="username"
            name="username"
            required="true"
          ></input>
          <label for="lastname">Apellido:</label>
          <input
            tipe="text"
            id="lastname"
            name="lastname"
            required="true"
          ></input>
          <label for="email">Email de contacto:</label>
          <input tipe="email" id="email" name="email" required="true"></input>
          <label for="tel">Teléfono:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="(Código de área) Número"
            required="true"
          ></input>
          <button>Enviar</button>
        </form>
        <Link to="/">Volver al Home</Link>
      </div>
      <Footer />
    </>
  );
}
