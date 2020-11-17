import React from "react";
import { Link } from "wouter";
import "./plan.css";
import right from "../../assets/icons/orange-right-arrow.svg";

export const Plan = ({ title, price, p }) => {
  return (
    <div className="plans--slider-containercards-card">
      <h4>{title}</h4>
      <h2>{price}</h2>
      <p>{p}</p>
      <Link to="/details">
        <h3>
          Escoger este <img src={right} alt="arrow"></img>
        </h3>
      </Link>
    </div>
  );
};
