import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Propos from "./Pages/Propos";
import Simu from "./Pages/Simu";
import AlgoWind from "./Pages/AlgoWind";
import AlgoSun from "./Pages/AlgoSun";
import AlgoHydro from "./Pages/AlgoHydro";
import Energies from "./Pages/Energies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/simulation" element={<Simu />} />
        <Route path="/simulation/vent" element={<AlgoWind />} />
        <Route path="/simulation/sun" element={<AlgoSun />} />
        <Route path="/simulation/hydro" element={<AlgoHydro />} />
        <Route path="/Energies_renouvelables" element={<Energies />} />
      </Routes>
    </div>
  );
}

export default App;
