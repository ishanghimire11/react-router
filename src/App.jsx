import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pokemons from "./pages/Pokemons";
import Details from "./pages/Details";
import Layout from "./components/Layout";
import Abilities from "./components/Abilities";
import Stats from "./components/Stats";
import Dimensions from "./components/Dimensions";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/pokemons" element={<Pokemons />} />

          <Route path="/pokemons/:name" element={<Details />}>
            <Route path=":id/abilities" element={<Abilities />} />

            <Route path=":id/dimensions" element={<Dimensions />} />

            <Route path=":id/stats" element={<Stats />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
