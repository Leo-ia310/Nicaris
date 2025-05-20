import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const menuItems = [
    { id: "home", name: "Inicio", link: "/" },
    {
      id: "properties",
      name: "Propiedades",
      link: "/properties",
      dropdown: [
        { id: "fincas", name: "Fincas", link: "/properties?type=fincas" },
        { id: "terrenos", name: "Terrenos", link: "/properties?type=terrenos" },
        { id: "casas", name: "Casas", link: "/properties?type=casas" },
        { id: "canteras", name: "Canteras", link: "/properties?type=canteras" },
      ],
    },
    { id: "about", name: "Sobre Nosotros", link: "/about" },
    { id: "services", name: "Servicios", link: "/services" },
    { id: "recruiters", name: "Captadores", link: "/recruiters" },
    { id: "legal", name: "Información Legal", link: "/legal" },
    { id: "blog", name: "Blog", link: "/blog" },
    { id: "contact", name: "Contacto", link: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-nicaris-green rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <h1
              className={cn(
                "font-bold text-xl transition-colors duration-300",
                scrolled ? "text-nicaris-green" : "text-white"
              )}
            >
              NICARIS
            </h1>
            <span
              className={cn(
                "text-xs font-light transition-colors duration-300",
                scrolled ? "text-nicaris-darkText" : "text-white"
              )}
            >
              Bienes Raíces
            </span>
          </div>
        </Link>

        {/* Navegacion Escritorio */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-6 relative">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.id)}
                    className={cn(
                      "flex items-center gap-1 font-medium transition-colors duration-300",
                      scrolled
                        ? "text-nicaris-darkText hover:text-nicaris-green"
                        : "text-white hover:text-nicaris-green"
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.id}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === item.id ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>

                  {/* Menu desplegable */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-48 bg-nicaris-cream rounded-md shadow-lg overflow-hidden transition-opacity duration-300",
                      activeDropdown === item.id ? "opacity-100 visible" : "opacity-0 invisible"
                    )}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.id}
                        to={dropItem.link}
                        className="block px-4 py-2 text-nicaris-darkText hover:text-nicaris-green"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.link}
                  className={cn(
                    "font-medium transition-colors duration-300 hover:text-nicaris-green",
                    scrolled ? "text-nicaris-darkText" : "text-white"
                  )}
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className={cn(
            "lg:hidden p-2 focus:outline-none rounded-md",
            scrolled ? "text-nicaris-darkText hover:bg-gray-200" : "text-white hover:bg-gray-700"
          )}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <nav
        className={cn(
          "lg:hidden fixed top-0 pt-16 left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-y-auto max-h-screen z-40",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
        aria-label="Mobile menu"
      >
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.id)}
                    className="flex justify-between items-center w-full py-3 px-4 text-gray-800 font-medium hover:bg-gray-100"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.id}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === item.id ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "bg-gray-50 overflow-hidden transition-all duration-300",
                      activeDropdown === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.id}
                        to={dropItem.link}
                        className="block py-2 px-8 text-gray-700 hover:text-nicaris-green"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.link}
                  className="block py-3 px-4 text-gray-800 font-medium hover:text-nicaris-green"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

