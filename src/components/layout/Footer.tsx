
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nicaris-darkText text-white pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">NICARIS Bienes Raíces</h3>
            <p className="text-gray-300 mb-4">
              Tu asesor de confianza para inversiones seguras en propiedades rurales y urbanas en Nicaragua.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/nicaris.bienes.raices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nicaris-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/nicaris_nic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nicaris-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nicaris-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Properties */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Propiedades</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=fincas" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Fincas Agrícolas y Ganaderas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=terrenos" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Terrenos para Inversión
                </Link>
              </li>
              <li>
                <Link to="/properties?type=casas" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Casas y Propiedades Urbanas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=canteras" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  Canteras con Permiso
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-nicaris-gold mt-1 shrink-0" />
                <p className="text-gray-300">Managua, Nicaragua</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-nicaris-gold shrink-0" />
                <a href="tel:+50588662303" className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  +505 8866 2303
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-nicaris-gold shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contactonicaris@gmail.com" target='_blank' className="text-gray-300 hover:text-nicaris-gold transition-colors">
                  contactonicaris@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} NICARIS Bienes Raíces. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
