import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";


function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/technology" element={<Technology/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
