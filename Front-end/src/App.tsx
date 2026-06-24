import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MainLayout from "./globalComponents/MainLayout";
import Epoche from "./components/Epoche";
import DettaglioEpoca from "./components/DettaglioEpoca";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/epoche-storiche" element={<Epoche />} /> 
          <Route path="/epoca/:epocaId/:subItemId" element={<DettaglioEpoca />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

