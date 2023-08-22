import "./styles.css";
import persona from "../../assets/person-solid.svg";
import grupo from "../../assets/people-group-solid.svg";
import familia from "../../assets/people-roof-solid.svg";
<link
  href="https://fonts.googleapis.com/css2?family=caprasimo&display=swap"
  rel="stylesheet"
/>;

export const Main3 = () => {
  return (
    <div className="boxes" id="planes">
      <h2 className="titleplans">
        Tenemos distintos planes para que elijas el que mas se adapte a tus
        necesidades{" "}
      </h2>
      <div className="box1">
        <h2 className="boxtitle">Plan Individual</h2>
        <p className="boxtips">
          Invierte tu solo para obtener una excelente rentabilidad
        </p>
        <div className="house-tag">
          <img className="housetag" src={persona} />
        </div>
      </div>
      <div className="box2">
        <h2 className="boxtitle">Plan Familia</h2>
        <p className="boxtips">
          Invierte junto a miembros de tu familia en donde todos podran ser
          propietarios
        </p>
        <div className="house-tag">
          <img className="housetag" src={familia} />
        </div>
      </div>
      <div className="box3">
        <h2 className="boxtitle">Plan Amigos</h2>
        <p className="boxtips">
          Invierte junto a tus amigos para poder hacer crecer el capital
        </p>
        <div className="house-tag">
          <img className="housetag" src={grupo} />
        </div>
      </div>
    </div>
  );
};
