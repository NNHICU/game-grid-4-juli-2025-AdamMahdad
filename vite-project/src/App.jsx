import { Routes, Route } from "react-router-dom";
import Layout from "./comp/layout";
import Home from "./pages/Home";
import About from "./pages/minecraft.jsx";
import Domein from "./pages/domein.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="domein" element={<Domein />} />
      </Route>
    </Routes>
  );
}

export default App;
