import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Lodging from "./components/pages/lodging/Lodging";
import Error from "./components/pages/error/Error";

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
