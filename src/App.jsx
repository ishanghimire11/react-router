import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pokemons from "./pages/Pokemons";
import Details from "./pages/Details";
import Layout from "./components/Layout";
import Abilities from "./components/Abilities";
import Stats from "./components/Stats";
import Dimensions from "./components/Dimensions";
import NotFound404 from "./components/404";

import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="*" element={<NotFound404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemons" element={<Pokemons />} />
        
        <Route path="/pokemons/:name" element={<Details />}>
          <Route path="abilities" element={<Abilities />} />
          <Route path="dimensions" element={<Dimensions />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
