import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MainLayout from "./globalComponents/MainLayout";
import Epoche from "./components/Epoche";
import DettaglioEpoca from "./components/DettaglioEpoca";
import Storie from "./components/Storie";
import Planets from "./components/Planets";
import Nature from "./components/Nature";
import Continents from "./components/Continents";
import ScrollToTop from "./globalComponents/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path = "/" element = {<Home />} />
          <Route path="/epoche-storiche/:id?" element={<Epoche />} /> 
          <Route path = "/epoca/:epocaId/:subItemId" element = {<DettaglioEpoca />}/>
          <Route path="/storie/:parametroId?" element={<Storie />} />
          <Route path = "/planets" element = {<Planets />}/>
          <Route path = "/Nature" element = {<Nature />}/>
          <Route path = "/continents" element = {<Continents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

