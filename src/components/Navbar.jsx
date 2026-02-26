import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/game'
      ? location.pathname === '/game' || location.pathname.startsWith('/game/')
      : location.pathname === path;

  return (
    <header className="bg-white font text-black flex items-center justify-between whitespace-nowrap border-b border-primary/20 px-6 md:px-20 py-4 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="h-10 w-10">
          <img src="/src/assets/collegelogo.png" alt="College Logo" className="h-full w-full object-contain" />
        </div>
        <h2 className="text-primary text-lg md:text-xl tracking-tight">Sports Week 2026</h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className=" hidden md:flex items-center gap-10">
        <Link
          className={`transition-colors text-sm font-medium ${isActive('/') ? 'nav-active' : 'text-gray-500 hover:text-primary'}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`transition-colors text-sm font-medium ${isActive('/game') ? 'nav-active' : 'text-gray-500 hover:text-primary'}`}
          to="/game"
        >
          Games
        </Link>
        <Link
          className={`transition-colors text-sm font-medium ${isActive('/faq') ? 'nav-active' : 'text-gray-500 hover:text-primary'}`}
          to="/faq"
        >
          FAQs
        </Link>
        <Link
          className={`transition-colors text-sm font-medium ${isActive('/gallery') ? 'nav-active' : 'text-gray-500 hover:text-primary'}`}
          to="/gallery"
        >
          Gallery
        </Link>
        <Link
          className={`transition-colors text-sm font-medium ${isActive('/contact') ? 'nav-active' : 'text-gray-500 hover:text-primary'}`}
          to="/contact"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col md:hidden justify-center gap-[5px] w-9 h-9 p-1.5 rounded-md hover:bg-primary/10 transition-colors"
        aria-label="Menu"
      >
        <span className="block w-full h-0.5 bg-black rounded"></span>
        <span className="block w-full h-0.5 bg-black rounded"></span>
        <span className="block w-full h-0.5 bg-black rounded"></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 flex-col gap-1 bg-background-dark border-b border-primary/20 px-6 py-3 z-40 md:hidden flex">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'nav-active-mobile' : 'text-gray-500 hover:text-primary hover:bg-primary/10'}`}
          >
            Home
          </Link>
          <Link
            to="/game"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${isActive('/game') ? 'nav-active-mobile' : 'text-gray-500 hover:text-primary hover:bg-primary/10'}`}
          >
            Games
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${isActive('/faq') ? 'nav-active-mobile' : 'text-gray-500 hover:text-primary hover:bg-primary/10'}`}
          >
            FAQs
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${isActive('/gallery') ? 'nav-active-mobile' : 'text-gray-500 hover:text-primary hover:bg-primary/10'}`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${isActive('/contact') ? 'nav-active-mobile' : 'text-gray-500 hover:text-primary hover:bg-primary/10'}`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
