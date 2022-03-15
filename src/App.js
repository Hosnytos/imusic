import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Favorites from "./pages/Favorites";
import Profil from "./pages/Profil";

function App() {
  return (
    <div className="root">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover/:id" element={<Discover />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
