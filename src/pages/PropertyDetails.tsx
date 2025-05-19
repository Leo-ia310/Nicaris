
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { MapPin, Ruler, Home, Phone, Mail, ArrowLeft } from 'lucide-react';

// Mock data for a single property (in a real app, this would come from an API)
const propertyData = {
  id: 1,
  title: "Finca Ganadera en Matagalpa",
  description: "Excelente finca ganadera con fuentes de agua naturales, buen pasto para el ganado, casa de habitación, corrales, establos y acceso durante todo el año. La propiedad cuenta con 50 manzanas de terreno, de las cuales 40 están desarrolladas con pasto mejorado. Incluye una casa principal de 150m², 3 habitaciones, 2 baños, cocina, sala y comedor. La finca dispone de 2 pozos de agua y un río que atraviesa la propiedad.",
  price: 150000,
  location: "Matagalpa, a 15 km de la ciudad",
  size: 50,
  sizeUnit: "mz",
  type: "Finca Ganadera",
  usage: "Ganadero",
  features: [
    "Casa principal de 150m²",
    "2 pozos de agua propios",
    "Río cruza la propiedad",
    "Corrales y establos",
    "40 manzanas de pasto mejorado",
    "Acceso todo el año",
    "Energía eléctrica",
    "Título de propiedad inscrito"
  ],
  images: [
    "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=1200",
    "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=1200",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200"
  ],
  contactInfo: {
    name: "Carlos Rodríguez",
    phone: "+505 8765 4321",
    whatsapp: "+5058765432",
    email: "carlos@nicaris.com"
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = React.useState(0);
  
  // In a real app, you would fetch the property data based on the ID
  const property = propertyData;
  
  // Handle case when property is not found
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Propiedad no encontrada</h1>
          <p className="mb-6">La propiedad que buscas no existe o ha sido eliminada.</p>
          <Link to="/properties" className="btn-primary">
            Ver todas las propiedades
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Back Button and Type */}
      <div className="bg-white pt-24 pb-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/properties" className="flex items-center gap-2 text-nicaris-green hover:underline">
              <ArrowLeft size={18} />
              Volver a propiedades
            </Link>
            <span className="bg-nicaris-green text-white px-4 py-1 rounded-full text-sm font-medium">
              {property.type}
            </span>
          </div>
        </div>
      </div>
      
      {/* Property Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Images and Info - Left Side */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-3">
                  {property.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        idx === activeImage ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} - Imagen ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {property.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 ${
                        idx === activeImage ? 'border-nicaris-green' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Title and Location */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-3">{property.title}</h1>
                <div className="flex items-center gap-1 text-nicaris-lightText">
                  <MapPin size={18} className="text-nicaris-brown" />
                  <span>{property.location}</span>
                </div>
              </div>
              
              {/* Property Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Ruler size={18} className="text-nicaris-green" />
                    <span className="text-nicaris-lightText text-sm">Tamaño</span>
                  </div>
                  <p className="font-medium">{property.size} {property.sizeUnit}</p>
                </div>
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Home size={18} className="text-nicaris-green" />
                    <span className="text-nicaris-lightText text-sm">Uso</span>
                  </div>
                  <p className="font-medium">{property.usage}</p>
                </div>
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-nicaris-lightText text-sm">Precio</span>
                  </div>
                  <p className="font-bold text-nicaris-green text-xl">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Descripción</h2>
                <p className="text-nicaris-darkText whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Características</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-nicaris-green"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map - Placeholder for now */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Ubicación</h2>
                <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
                  <p className="text-nicaris-lightText">
                    Mapa de ubicación no disponible en este momento
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Information - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Contactar al Asesor</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-nicaris-cream rounded-full flex items-center justify-center text-nicaris-green font-bold text-xl">
                    {property.contactInfo.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{property.contactInfo.name}</h4>
                    <p className="text-sm text-nicaris-lightText">Asesor de Bienes Raíces</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <a 
                    href={`tel:${property.contactInfo.phone}`} 
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Phone size={20} className="text-nicaris-green" />
                    <span>{property.contactInfo.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${property.contactInfo.email}`} 
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Mail size={20} className="text-nicaris-green" />
                    <span>{property.contactInfo.email}</span>
                  </a>
                </div>
                
                <a 
                  href={`https://wa.me/${property.contactInfo.whatsapp}?text=Hola, estoy interesado en la propiedad: ${property.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V7a1 1 0 0 0-2 0v3Z" />
                  </svg>
                  Contactar por WhatsApp
                </a>
                
                {/* Contact Form */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Solicitar información</h3>
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Nombre completo
                        </label>
                        <input 
                          type="text"
                          id="name"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Correo electrónico
                        </label>
                        <input 
                          type="email"
                          id="email"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Teléfono
                        </label>
                        <input 
                          type="tel"
                          id="phone"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Mensaje
                        </label>
                        <textarea 
                          id="message"
                          rows={4}
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                          defaultValue={`Hola, estoy interesado en la propiedad "${property.title}" y me gustaría obtener más información.`}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn-secondary w-full">
                        Enviar solicitud
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber={property.contactInfo.whatsapp} message={`Hola, estoy interesado en la propiedad: ${property.title}`} />
    </div>
  );
};

export default PropertyDetails;
