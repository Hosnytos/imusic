import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Trend from "./pages/Trend";
import Favorites from "./pages/Favorites";
import Profil from "./pages/Profil";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
