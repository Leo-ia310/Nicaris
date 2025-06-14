import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: "home", name: "Inicio", link: "/" },
    { id: "properties", name: "Propiedades", link: "/properties" },
    { id: "about", name: "Sobre Nosotros", link: "/about" },
    { id: "services", name: "Servicios", link: "/services" },
    { id: "recruiters", name: "Captadores", link: "/recruiters" },
    { id: "legal", name: "Información Legal", link: "/legal" },
    { id: "blog", name: "Blog", link: "/blog" },
    { id: "contact", name: "Contacto", link: "/contact" },
  ];

  const handleLogoClick = () => {
    // Navigate to home and refresh the page
    navigate("/");
    window.location.reload(); // This will refresh the page
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
        location.pathname.includes('/property/') ? "bg-nicaris-green" : "",
    
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" onClick={handleLogoClick}>
          <div className="w-10 h-10 bg-nicaris-green rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <h2
              className={cn(
                "font-bold text-xl transition-colors duration-300",
              location.pathname.includes('/property/')
              ? "text-white"
              : scrolled
              ? "text-nicaris-green"
              : "text-white"
              )}
            >
              NICARIS 
            </h2>
            <span
              className={cn(
                "text-xs font-light transition-colors duration-300",
                location.pathname.includes('/property/')
                ? "text-white"
                : scrolled
                ? "text-nicaris-darkText"
                : "text-white"
              )}
            >
              Bienes Raíces
            </span>
          </div>
        </Link>

        {/* Navegacion Escritorio */}
        <nav className="hidden lg:flex items-center gap-6 relative">
          {menuItems.map((item) => {
    const pathname = location.pathname;
    const isPropertyPage = pathname.startsWith("/property/");
    const isHomePage = pathname === "/";
    const isOtherPage = !isPropertyPage && !isHomePage;

    let linkClasses = "font-medium transition-colors duration-300 ";

    if (isPropertyPage) {
      linkClasses += "text-white hover:text-black";
    } else if (isHomePage) {
      linkClasses += scrolled
        ? "text-nicaris-darkText hover:text-nicaris-green"
        : "text-white hover:text-nicaris-green";
    } else {
      // Otras páginas (hover negro)
      linkClasses += scrolled
        ? "text-nicaris-darkText hover:text-black"
        : "text-white hover:text-black";
    }

    return (
      <Link
        key={item.id}
        to={item.link}
        onClick={() => setIsOpen(false)}
        className={linkClasses}
      >
        {item.name}
      </Link>
    );
  })}
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
        {/* Botón de cerrar dentro del menú móvil */}
        <div className="flex justify-end pr-4 pt-2">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-nicaris-green focus:outline-none"
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block py-3 px-4 text-gray-800 font-medium hover:text-nicaris-green"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
