import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-6 z-50">
    
      <div className="text-white font-bold text-3xl">✦</div>
    

      
      <ul className="hidden md:flex space-x-10 uppercase tracking-wide bg-white/10 backdrop-blur-md px-12 py-4 rounded-lg">
        <li><Link to="/">Home 00</Link></li>
        <li><Link to="/destination">Destination 01</Link></li>
        <li><Link to="/crew">Crew 02</Link></li>
        <li><Link to="/technology">Technology 03</Link></li>
      </ul>

      
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-black/90 backdrop-blur-lg flex flex-col items-start px-8 py-12 space-y-8 text-lg uppercase transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/destination" onClick={() => setIsOpen(false)}>Destination</Link>
        <Link to="/crew" onClick={() => setIsOpen(false)}>Crew</Link>
        <Link to="/technology" onClick={() => setIsOpen(false)}>Technology</Link>
      </div>
    </nav>
  );
};

export default Navbar;
