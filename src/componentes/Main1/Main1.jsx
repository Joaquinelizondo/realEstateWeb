import React from "react";
import "./styles.css";
import { Header } from "../Header/Header";

export const Main1 = (props) => {
  return (
    <div className="wwd-container" id="quienes-somos">
      <div className="wwd-title">
        <h2>Como agregamos valor a tus inversiones ?</h2>
      </div>
      <div className="wwd-container1">
        <div className="wwd1">
          <img
            src="../../../src/assets/hand-holding-dollar-solid.svg"
            className="icon"
          />
          <h3 className="textwwd">
            Brindamos opciones de Inversion en inmuebles para ayudar a nuestros
            clientes a hacer crecer su Patrimonio y rentabilidad
          </h3>
        </div>
        <div className="wwd2">
          <img
            src="../../../src/assets/person-shelter-solid.svg"
            className="icon"
          />
          <h3 className="textwwd">
            Hacemos del negocio inmobiliario la mejor opcion de inversion para
            nuestros clientes.
          </h3>
        </div>
        <div className="wwd1">
          <img
            src="../../../src/assets/calendar-check-regular.svg"
            className="icon"
          />
          <h3 className="textwwd">
            Valoramos tu tiempo para que puedas aprovecharlo al maximo
          </h3>
        </div>
        <div className="wwd2">
          <img src="../../../src/assets/door-open-solid.svg" className="icon" />
          <h3 className="textwwd">
            Estamos para asesorarte en todos los detalles de tu inversion.
          </h3>
        </div>
      </div>
    </div>
  );
};
