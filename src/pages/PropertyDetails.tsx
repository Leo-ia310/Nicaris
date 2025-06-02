import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Ruler, Home, Phone, Mail, ArrowLeft, Target } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

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
    Data: "de san rafael del sur, de 30 manzanas",
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
      "../ImagenesFinca/FN30MuSRFDS/1.jpeg",
      "../ImagenesFinca/FN30MuSRFDS/2.jpeg",
      "../ImagenesFinca/FN30MuSRFDS/3.jpeg",
      "../ImagenesFinca/FN30MuSRFDS/4.jpeg",
      "../ImagenesFinca/FN30MuSRFDS/5.jpeg",
      "../ImagenesFinca/FN30MuSRFDS/6.jpeg",
      "../ImagenesFinca/FN30MuSRFDS/7.jpeg",
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Buscar la propiedad específica por ID
  const property = propertiesData.find(prop => prop.id === parseInt(id));

  // Manejar el caso cuando la propiedad no se encuentra
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Propiedad no encontrada</h1>
          <p className="mb-6">La propiedad que buscas no existe o ha sido eliminada.</p>
          <Link to="/properties" className="btn-primary">
            Ver todas las propiedades
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col">
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
                        alt={`Error 404 ${idx + 1}`}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
