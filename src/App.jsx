import "./App.css";

import { Footer } from "./componentes/Footer/Footer";
import { Form } from "./componentes/Formulario/Form";
import { Header } from "./componentes/Header/Header";
import { Main } from "./componentes/Main/Main";
import { Main1 } from "./componentes/Main1/Main1";
import { Main2 } from "./componentes/Main2/Main2";
import { Main3 } from "./componentes/Main3/Main3";
import { Slider1 } from "./componentes/Slider1/Slider1";
import { Routes, Route } from "react-router-dom";

export const App = (props) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/quienes-somos" element={<Main1 />} />
        <Route path="/planes" element={<Main3 />} />
        <Route path="/contactanos" element={<Form />} />
      </Routes>
      <Main />
      <Slider1 />

      <Main1 />

      <Main2 />
      <Main3 />

      <Form />
      <Footer />
    </div>
  );
};

export default App;
