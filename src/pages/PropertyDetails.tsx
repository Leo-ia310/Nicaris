import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { MapPin, Ruler, Home, Phone, Mail, ArrowLeft } from 'lucide-react';

// Mock data for multiple properties
const propertiesData = [
  {
    id: 1,
    title: "Finca de 30 Manzanas",
    description: "Excelente finca para turismo o descanso, cuenta con piscina y una presa que se puede llenar, lugares de para comer actividades recreativa. Tiene siembros y se puede utilizar para ganado, cuenta con su bomba de agua ",
    price: 250000,
    location: "Km 41.5 carretera a los chiles San rafael del sur",
    size: 30,
    sizeUnit: "mz",
    type: "Finca Ganadera",
    usage: "Quinta",
    features: [
    "3 Casas",
    "2 Pozos",
    "Luz",
    "Documentos en regla",
    "Agua", 
    "Acta para ganaderia y agricultura",  
    "Contiene rio adentro la finca", 
    "La propiedad esta sobre la carretera",
    "Posee tanque de agua",
    ],
    images: [
      "../public/ImagenesFinca/FN30MuSRFDS/1.jpeg",
      "../public/ImagenesFinca/FN30MuSRFDS/2.jpeg",
      "../public/ImagenesFinca/FN30MuSRFDS/3.jpeg",
      "../public/ImagenesFinca/FN30MuSRFDS/4.jpeg",
      "../public/ImagenesFinca/FN30MuSRFDS/5.jpeg",
      "../public/ImagenesFinca/FN30MuSRFDS/6.jpeg",
      "../public/ImagenesFinca/FN30MuSRFDS/7.jpeg",
    ],
    contactInfo: {
      name: "Andres Morales",
      phone: "+505 8505 0811",
      whatsapp: "+505 8505 0811",
      email: "andresmoralesampienicaris@gmail.com"
    }
  },
  {
    id: 2,
    title: "Inversion en Finca Minera",
    description: "Hermosa casa de playa con vista al mar, 4 habitaciones, piscina privada y acceso directo a la playa.",
    price: 5000000,
    location: "nagarote, Nicaragua",
    size: 529,
    sizeUnit: "mz",
    type: "Cantera",
    usage: "Mina",
    features: [
    "Docmentos", 
    "Para explotacion de cantera (material de alta caidad)",
    "Incluye, equipos y maquinaria de producción para cantera",
    ],
    images: [
      "../public/ImagenesFinca/MN529MNGcC/1.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/2.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/3.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/4.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/5.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/6.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/7.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/8.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/9.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/10.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/11.jpeg",
      "../public/ImagenesFinca/MN529MNGcC/12.jpeg",



    ],
    contactInfo: {
      name: "Andres Morales",
      phone: "+505 8505 0811",
      whatsapp: "+505 8505 0811",
      email: "andresmoralesampienicaris@gmail.com"
    }
  },
  {
    id: 3,
    title: "Finca de 222 Manzanas",
    description: "La propiedad cuenta con topografía favorable y acceso por carretera, lo que facilita el traslado de maquinaria, insumos y productos. Su tamaño y ubicación permiten desarrollar proyectos a gran escala con enfoque en ganadería intensiva, agricultura extensiva o combinación de ambos.NOTA: las 2 casas una es para el cuidador y otra para el propietario.",
    price: 1400000,
    location: "Rivas Kilómetro 89, Nicaragua",
    size: 222,
    sizeUnit: "mz",
    type: "Finca Ganadera",
    usage: "Ganaderia",
    features: [
      "Documentos en reglas",
      "2 Casas",
      "Agua",
      "Luz",
      "3 Pozos",
    ],
    images: [
      "../public/ImagenesFinca/FN222MuRVcG/4.jpeg",
      "../public/ImagenesFinca/FN222MuRVcG/3.jpeg",
      "../public/ImagenesFinca/FN222MuRVcG/2.jpeg",

      
    ],
    contactInfo: {
      name: "Andres Morales",
      phone: "+505 8505 0811",
      whatsapp: "+505 8505 0811",
      email: "andresmoralesampienicaris@gmail.com"
    }
  },
  {
    id: 4,
    title: "Finca en leon",
    description: "Finca con todo Listo solo para ponerla a trabajar el acceso esta muy bueno entra cualquier vechiculo y esta 10 minutos de la carretera",
    price: 210000,
    location: "Leon a 30 minutos de managua, los cedros, Nicaragua",
    size: 84,
    sizeUnit: "mz",
    type: "Ganadera",
    usage: "Ganaderia",
    features: [
      "2 casas",
      "Una bodega",
      "1 rio que abarca toda la propiedad",
      "Un lugar donde comen las vacas",
      "Potreros",
      "Agua",
      "Luz",
      "Documentos en regla",
    ],
    images: [
      "../public/ImagenesFinca/FN84MuLNcG/1.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/2.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/3.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/4.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/6.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/8.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/10.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/11.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/13.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/14.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/16.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/17.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/19.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/21.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/25.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/26.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/28.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/30.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/31.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/32.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/33.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/35.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/36.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/37.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/38.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/39.jpeg",
"../public/ImagenesFinca/FN84MuLNcG/40.jpeg"

    ],
    contactInfo: {
      name: "Andres Morales",
      phone: "+505 8505 0811",
      whatsapp: "+505 8505 0811",
      email: "andresmoralesampienicaris@gmail.com"
    }
  },
  {
    id: 5,
    title: "Finca de Café en Jinotega",
    description: "Finca productora de café con 30 manzanas de terreno, casa de trabajador y acceso a agua potable.",
    price: 200000,
    location: "Jinotega, Nicaragua",
    size: 30,
    sizeUnit: "mz",
    type: "Finca de Café",
    usage: "Agrícola",
    features: [
      "30 manzanas de cultivo de café",
      "Casa de trabajador",
      "Acceso a agua potable",
      "Cercano a rutas de transporte"
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200"
    ],
    contactInfo: {
      name: "Luis Gómez",
      phone: "+505 5555 5555",
      whatsapp: "+50555555555",
      email: "luis@nicaris.com"
    }
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = React.useState(0);
  
  // Buscar la propiedad específica por ID
  const property = propertiesData.find(prop => prop.id === parseInt(id));

  // Manejar el caso cuando la propiedad no se encuentra
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