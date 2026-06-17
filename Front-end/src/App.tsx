import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MainLayout from "./globalComponents/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

