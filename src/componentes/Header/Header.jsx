import { Main1 } from "../Main1/Main1";
import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mainheader">
      <div className="logo">
        <div className="marca">
          <div className="logom">
            <b className="nombre">repropia</b>
          </div>
        </div>
      </div>
      <div className="head1">
        <ul className="head11">
          <li className="navbar">
            <Link to="/quienes-somos" className="nav1">
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link to="/planes" className="nav1">
              Nuestros planes
            </Link>
          </li>
          <li>
            <Link to="/Contactanos" className="nav1">
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
      <div className="gif">
        <img
          className="house-gif"
          src="https://media.giphy.com/media/osz5c1Olw11dF302kJ/giphy.gif"
        />
      </div>
    </div>
  );
};
