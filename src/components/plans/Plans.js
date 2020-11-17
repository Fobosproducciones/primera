import React from "react";
import "./Plans.css";
import { Plan } from "./plan";

export default function Plans() {
  return (
    <div>
      <section id="plans" className="plans">
        <div className="plans--containertext">
          <h3>Escoge el plan que mejor se ajuste a ti.</h3>
          <p> Cualquier plan te da acceso completo a nuestra plataforma.</p>
        </div>
        <div className="plans--slider">
          <div className="plans--slider-containercards">
            <Plan
              title="Pago Mensual"
              price="$25"
              p="*Ahorrás $45 comprando este plan."
            />
            <div className="plans--slider-containercards-span">
              <span>Recomendado</span>
            </div>
            <Plan
              title="Pago Anual"
              price="$99"
              p="*Ahorrás $129 comprando este plan."
            />
            <Plan
              title="Pago Semestral"
              price="$66"
              p="*Ahorrás $57 comprando este plan."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
