import "./styles.css";
import fam1 from "../../assets/familia1.jpeg";
import rent from "./../../assets/chart-line-solid.svg";
import building from "../../assets/city-solid.svg";
import coffee from "../../assets/mug-saucer-solid.svg";

export const Main2 = (props) => {
  return (
    <div className="planes">
      <div className="plan">
        <img className="ico" src={coffee}></img>
        <div>
          <h3 className="titleplanes">Tomate un cafe con nosotros</h3>
        </div>

        <p className="textplanes">
          Coordinamos una reunion virtual o presencial para que puedas tener
          clara toda la informacion
        </p>
      </div>
      <div className="plan">
        <img className="ico" src={building}></img>
        <div>
          <h3 className="titleplanes">Te asesoramos</h3>
        </div>
        <p className="textplanes">
          Te asesoramos en las mejores opciones de acuerdo a tus necesidades
        </p>
      </div>
      <div className="plan">
        <img className="ico" src={rent}></img>
        <div>
          <h3 className="titleplanes">Apoyo luego de la compra</h3>
        </div>

        <p className="textplanes">
          Luego de la compra de tu propiedad te apoyamos para que puedas tener
          la mejor rentabilidad de tu inversion
        </p>
      </div>
    </div>
  );
};
