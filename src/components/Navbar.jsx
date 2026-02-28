import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ACCENT = '#F30051';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/game'
      ? location.pathname === '/game' || location.pathname.startsWith('/game/')
      : location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/game', label: 'Games' },
    { path: '/faq', label: 'FAQs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`bg-white font text-black flex flex-col whitespace-nowrap border-b border-primary/20 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 md:px-20 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 flex-shrink-0">
            <img src="/collegelogo.png" alt="College Logo" className="h-full w-full object-contain" />
          </div>
          <h2 className="text-primary text-lg md:text-xl tracking-tight leading-tight">
            Sports Week 2026
          </h2>
        </Link>

        {/* Desktop Navigation — unchanged original style */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`transition-colors text-sm font-medium ${isActive(path) ? 'nav-active' : 'text-gray-500 nav-hover'
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-10 h-10 p-2 rounded-md transition-colors flex-shrink-0 nav-hamburger-hover"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown — solid white bg, accent color for active */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 shadow-lg">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 border-l-4"
              style={
                isActive(path)
                  ? { color: ACCENT, borderLeftColor: ACCENT, backgroundColor: `${ACCENT}14` }
                  : { color: '#374151', borderLeftColor: 'transparent' }
              }
              onMouseEnter={(e) => {
                if (!isActive(path)) {
                  e.currentTarget.style.color = ACCENT;
                  e.currentTarget.style.backgroundColor = `${ACCENT}0d`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(path)) {
                  e.currentTarget.style.color = '#374151';
                  e.currentTarget.style.backgroundColor = '';
                }
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
