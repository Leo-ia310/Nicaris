
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Finca de 30 Manzanas",
    imageUrl: "../ImagenesFinca/Finca30.jpeg",
    price: 250000,
    location: "San rafael del sur",
    size: 30,
    sizeUnit: "mz",
    type: "Finca",
    description: "Excelente finca para turismo, o bien para quinta"
  },
  {
    id: 2,
    title: "Inversion en Finca Minera",
    imageUrl: "../ImagenesFinca/FincaMinera.jpeg",
    price: 5000000,
    location: "nagarote",
    size: 529,
    sizeUnit: "mz",
    type: "Cantera",
    description: "Mina de piedra cantera, con permisos de explotacion"
  },
  {
    id: 3,
    title: "Finca de 222 Manzanas ",
    imageUrl: "../ImagenesFinca/Finca222.jpeg",
    price: 1400000,
    location: "Rivas",
    size: 222,
    sizeUnit: "mz",
    type: "Finca ganadera",
    description: "Finca ganadera en rivas, adaptada para ganaderia"
  },
  {
    id: 4,
    title: "Finca en leon",
    imageUrl: "../ImagenesFinca/Finca84.jpeg",
    price: 210000,
    location: "Leon",
    size: 84,
    sizeUnit: "mz",
    type: "Finca ganadera",
    description: "Finca ganadera Full equipada"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="section-title">Propiedades Destacadas</h2>
            <p className="text-nicaris-lightText max-w-2xl">
              Descubre nuestras propiedades más buscadas y mejores oportunidades de inversión en Nicaragua
            </p>
          </div>
          <Link 
            to="/properties" 
            className="hidden md:flex items-center gap-2 text-nicaris-green hover:underline"
          >
            Ver todas 
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-lg overflow-hidden card-shadow hover:translate-y-[-5px] transition-all duration-300"
            >
              <Link to={`/property/${property.id}`}>
                <div className="relative h-48">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-nicaris-green text-white px-3 py-1 text-sm font-medium rounded">
                    {property.type}
                  </div>
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/property/${property.id}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-nicaris-green transition-colors">
                    {property.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  <MapPin size={16} className="text-nicaris-brown" />
                  <span className="text-nicaris-lightText text-sm">{property.location}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-nicaris-green font-semibold">
                    ${property.price.toLocaleString()}
                  </span>
                  <span className="text-nicaris-lightText text-sm">
                    {property.size} {property.sizeUnit}
                  </span>
                </div>
                <p className="text-nicaris-lightText text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>
                <Link 
                  to={`/property/${property.id}`}
                  className="btn-outline text-sm py-1.5 px-4 w-full text-center block"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/properties" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver todas las propiedades
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
