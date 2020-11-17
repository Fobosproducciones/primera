import React from "react";
import "./Coins.css";
import up from "../../assets/icons/trending-up.svg";
import down from "../../assets/icons/trending-down.svg";

export default function Coins() {
  return (
    <div>
      <main>
        <section className="main--exchange-container">
          <div className="main--exchange-container-backimg"></div>
          <div className="main--exchange-container-text">
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>
              Traemos información en tiempo real de las casas de cambio y las
              monedas más importantes del mundo.
            </p>
          </div>
        </section>
        <section className="main--coins">
          <div className="main--coins-container">
            <div className="main--coins-container-cards1">
              <h3>Monedas</h3>
              <div className="main--coins-container-cards-grid1">
                <div>
                  <h4>Bitcoin</h4>
                </div>
                <div>
                  <h5>
                    $ 1.96
                    <span>
                      <img src={down} alt="" />
                    </span>
                  </h5>
                </div>
                <div>
                  <h4>Ethereum</h4>
                </div>
                <div>
                  <h5>
                    $ 0.07
                    <span>
                      <img src={up} alt="up" />
                    </span>
                  </h5>
                </div>
                <div>
                  <h4>Ripple</h4>
                </div>
                <div>
                  <h5>
                    $ 2.15
                    <span>
                      <img src={down} alt="down" />
                    </span>
                  </h5>
                </div>
                <div>
                  <h4>Stellar</h4>
                </div>
                <div>
                  <h5>
                    $ 4.96
                    <span>
                      <img src={down} alt="down" />
                    </span>
                  </h5>
                </div>
              </div>
              <div className="main--coins-container-update">
                <p>
                  <span>Actualizado:</span>19 de Julio 23:45
                </p>
              </div>
            </div>

            <div className="main--coins-container-cards2">
              <h3>Comisiones</h3>
              <div className="main--coins-container-cards-grid1">
                <div>
                  <h4>Bitcoin</h4>
                </div>
                <div>
                  <h5>
                    $ 1.96<span></span>
                  </h5>
                </div>
                <div>
                  <h4>Ethereum</h4>
                </div>
                <div>
                  <h5>
                    $ 0.07<span></span>
                  </h5>
                </div>
                <div>
                  <h4>Ripple</h4>
                </div>
                <div>
                  <h5>
                    $ 2.15<span></span>
                  </h5>
                </div>
                <div>
                  <h4>Stellar</h4>
                </div>
                <div>
                  <h5>
                    $ 4.96<span></span>
                  </h5>
                </div>
              </div>
              <div className="main--coins-container-update">
                <p>
                  <span>Actualizado:</span>19 de Julio 23:48
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
