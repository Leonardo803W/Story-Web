import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MainLayout from "./globalComponents/MainLayout";
import Epoche from "./components/Epoche";
import DettaglioEpoca from "./components/DettaglioEpoca";
import Storie from "./components/Storie";
import Planets from "./components/Planets";
import Nature from "./components/Nature";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path = "/" element = {<Home />} />
          <Route path = "/epoche-storiche" element = {<Epoche />} /> 
          <Route path = "/epoca/:epocaId/:subItemId" element = {<DettaglioEpoca />}/>
          <Route path = "/storie" element = {<Storie />}/>
          <Route path = "/planets" element = {<Planets />}/>
          <Route path = "/Nature" element = {<Nature />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

