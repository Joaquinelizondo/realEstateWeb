import React from "react";
import "./styles.css";
import { Header } from "../Header/Header";
import img1 from "../../assets/hand-holding-dollar-solid.svg";
import person1 from "../../assets/person-shelter-solid.svg";
import calendar1 from "../../assets/calendar-check-regular.svg";
import door1 from "../../assets/door-open-solid.svg";

export const Main1 = (props) => {
  return (
    <div className="wwd-container" id="quienes-somos">
      <div className="wwd-title">
        <h2 className="quienes-somos">Quienes somos </h2>
      </div>
      <div className="quienes-somos-intro">
        <p className="quienes-intro">
          Somos un equipo joven con experienca en el rubro inmobiliario que esta
          buscando continuamente brindar el mejor servicio a nuestros clientes.
        </p>
      </div>
      <div className="wwd-container1">
        <div className="wwd1">
          <img src={img1} className="icon" />
          <h3 className="textwwd">
            Brindamos opciones de Inversion en inmuebles para ayudar a nuestros
            clientes a hacer crecer su Patrimonio y rentabilidad.
          </h3>
        </div>
        <div className="wwd2">
          <img src={person1} className="icon" />
          <h3 className="textwwd">
            Hacemos del negocio inmobiliario la mejor opcion de inversion para
            nuestros clientes.
          </h3>
        </div>
        <div className="wwd1">
          <img src={calendar1} className="icon" />
          <h3 className="textwwd">
            Valoramos tu tiempo para que puedas aprovecharlo al maximo.
          </h3>
        </div>
        <div className="wwd2">
          <img src={door1} className="icon" />
          <h3 className="textwwd">
            Estamos para asesorarte en todos los detalles de tu inversion.
          </h3>
        </div>
      </div>
    </div>
  );
};
