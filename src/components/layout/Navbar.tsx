import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const menuItems = [
    { id: 'home', name: 'Inicio', link: '/' },
    {
      id: 'properties',
      name: 'Propiedades',
      link: '/properties',
      dropdown: [
        { name: 'Fincas', link: '/properties?type=fincas' },
        { name: 'Terrenos', link: '/properties?type=terrenos' },
        { name: 'Casas', link: '/properties?type=casas' },
        { name: 'Canteras', link: '/properties?type=canteras' }
      ]
    },
    { id: 'about', name: 'Sobre Nosotros', link: '/about' },
    { id: 'services', name: 'Servicios', link: '/services' },
    { id: 'recruiters', name: 'Captadores', link: '/recruiters' },
    { id: 'legal', name: 'Información Legal', link: '/legal' },
    { id: 'blog', name: 'Blog', link: '/blog' },
    { id: 'contact', name: 'Contacto', link: '/contact' }
  ];

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-nicaris-green rounded-md flex items-center justify-center">
            {/* Logo placeholder */}
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <h1 className={cn(
              "font-bold text-xl transition-colors duration-300",
              scrolled ? "text-nicaris-green" : "text-white"
            )}>
              NICARIS
            </h1>
            <span className={cn(
              "text-xs font-light transition-colors duration-300",
              scrolled ? "text-nicaris-darkText" : "text-white"
            )}>
              Bienes Raíces
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group">
              {item.dropdown ? (
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="flex items-center justify-between w-full py-3 px-4 text-nicaris-darkText font-medium"
                  >
                    <span className={cn(
                      scrolled ? "text-nicaris-darkText" : "text-white"
                    )}>
                      {item.name}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === item.id ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-nicaris-cream shadow-md rounded-md overflow-hidden z-10">
                      {item.dropdown.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.link}
                          className="block py-2 px-4 text-nicaris-darkText hover:text-nicaris-green"
                          onClick={(e) => {
                            e.stopPropagation(); // Evita que el clic cierre el dropdown
                            setIsOpen(false); // Cierra el menú móvil si es necesario
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={cn(
                    "font-medium transition-colors duration-300 hover:text-nicaris-green",
                    scrolled ? "text-nicaris-darkText" : "text-white"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? "text-nicaris-darkText" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-nicaris-darkText" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed top-[60px] left-0 right-0 bg-white shadow-md transition-transform duration-300 transform lg:hidden",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto py-4">
          {menuItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100 last:border-b-0">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="flex items-center justify-between w-full py-3 px-4 text-nicaris-darkText font-medium"
                  >
                    <span className={cn(
                      scrolled ? "text-nicaris-darkText" : "text-white"
                    )}>
                      {item.name}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === item.id ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {activeDropdown === item.id && (
                    <div className="bg-nicaris-cream">
                      {item.dropdown.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.link}
                          className="block py-2 px-8 text-nicaris-darkText hover:text-nicaris-green"
                          onClick={(e) => {
                            e.stopPropagation(); // Evita que el clic cierre el dropdown
                            setIsOpen(false); // Cierra el menú móvil si es necesario
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className="block py-3 px-4 text-nicaris-darkText font-medium hover:text-nicaris-green"
                  onClick={() => setIsOpen(false)}
                >
                  <span className={cn(
                    scrolled ? "text-nicaris-darkText" : "text-white"
                  )}>
                    {item.name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
