import "./styles.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Aumenta tu capital",
        "Consigue una renta mensual",
        "Aumenta tu patrimonio",
        "Invierte en proyectos de categoria",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mainImg">
      <h1 className="titlemain">
        Invierte en las mejores opciones de inversion inmobiliaria de Asuncion
      </h1>

      <h1 ref={el}></h1>
    </div>
  );
};
