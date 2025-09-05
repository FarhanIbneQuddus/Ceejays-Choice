// ...existing code...
// Clean, scroll-responsive header component
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-lg py-2" : "bg-white/70 py-4"}`} style={{ backdropFilter: "blur(8px)" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className={`transition-all duration-300 ${scrolled ? "h-8 w-8" : "h-10 w-10"}`} style={{ objectFit: "contain" }} />
          <span className={`font-bold transition-all duration-300 ${scrolled ? "text-lg" : "text-2xl"}`}>Ceejay's Choice</span>
        </div>
        {/* Search and Genre */}
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" />
          <select className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
            <option>All Genres</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Romance</option>
          </select>
        </div>
      </div>
      {/* Placeholder to prevent content overlap */}
      <div className={scrolled ? "h-14" : "h-20"}></div>
    </header>
  );
};

export default Header;