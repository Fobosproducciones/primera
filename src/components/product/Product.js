import React from "react";
import { Link } from "wouter";
import "./Product.css";
import batata from "../../assets/icons/batata.svg";
import clock from "../../assets/icons/clock.svg";
import eye from "../../assets/icons/eye.svg";
import dollar from "../../assets/icons/dollar-sign.svg";
import check from "../../assets/icons/check-circle.svg";
import { Benefit } from "./Benefit";
export default function Products() {
  return (
    <div>
      <section className="main--benefits">
        <div className="main--benefits-container">
          <div className="main--benefits-container-icon">
            <img src={batata} alt="icon"></img>
          </div>
          <div className="main--benefits-container-text">
            <h3>Creamos un producto sin comparación.</h3>
            <p>Confiable y diseñado para su uso diario.</p>
          </div>
          <Benefit
            imgUrl={clock}
            title="Tiempo real"
            p="Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento."
          />{" "}
          <Benefit
            imgUrl={eye}
            title="No hay tasas escondidas real"
            p="Ni en la compra o al momento de exit, Batabit siempre te muestra
          el costo real de lo que estás adquiriendo."
          />
          <Benefit
            imgUrl={dollar}
            title="Compra monedas"
            p="No más rumores, con Babtabit sabrás el valor real de cada moneda
            en el mercado actual."
          />
          <Benefit
            imgUrl={check}
            title="Información confiable"
            p=" Nuestras fuentes están 100% verificadas y continuamos auditando su
            contenido mientras se actualizan."
          />
        </div>
      </section>
      <section className="image">
        <div className="image--container">
          <h3>Conocé más.</h3>
          <Link to="/news">
            <h4>CryptoNoticias</h4>
          </Link>
        </div>
      </section>
    </div>
  );
}
