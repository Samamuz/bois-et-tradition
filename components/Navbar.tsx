import React, { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';

const links = [
  { label: 'Accueil', path: '/' },
  { label: 'Savoir-Faire', path: '/savoir-faire' },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine navbar style: solid if scrolled OR if not on home page OR if mobile menu is open
  const showSolidNav = scrolled || !isHome || isOpen;

  const navClass = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    showSolidNav ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
  }`;

  // Use white text on transparent background (Home top), dark text otherwise
  const textClass = showSolidNav ? 'text-stone-800' : 'text-white';
  const logoClass = showSolidNav ? 'text-wood-800' : 'text-white';
  const buttonClass = showSolidNav ? 'text-stone-800 hover:bg-wood-100' : 'text-white hover:bg-white/10';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <Mountain className={`h-8 w-8 ${logoClass} transition-transform duration-300 group-hover:scale-110`} />
            <span className={`font-serif text-2xl font-bold tracking-wide ${logoClass}`}>
              Bois & Tradition
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest font-semibold transition-colors duration-200 hover:text-wood-400 ${
                    isActive 
                      ? 'text-wood-500 underline decoration-2 underline-offset-4' 
                      : textClass
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <RouterNavLink
              to="/contact"
              className={`px-5 py-2 rounded-sm font-serif font-bold transition-colors ${
                showSolidNav 
                  ? 'bg-wood-800 text-white hover:bg-wood-700' 
                  : 'bg-white text-wood-900 hover:bg-wood-50'
              }`}
            >
              Devis Gratuit
            </RouterNavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${buttonClass} focus:outline-none transition-colors duration-300`}
              aria-label="Menu principal"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-wood-100">
          {links.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'text-wood-800 bg-wood-50'
                    : 'text-stone-600 hover:text-wood-800 hover:bg-wood-50'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;