import React from "react";
import "./benefit.css";

export const Benefit = ({ imgUrl, title, p }) => {
  return (
    <div className="main--benefits-container-card">
      <img src={imgUrl} alt="clock"></img>
      <h3>{title}</h3>
      <p>{p}</p>
    </div>
  );
};
