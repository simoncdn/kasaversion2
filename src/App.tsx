import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Lodging from "./pages/lodging/Lodging";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Lodging />} />
        <Route path="*" element={<Error />} />
        <Route path="/logements/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
