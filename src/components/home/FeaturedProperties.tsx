
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Finca Ganadera en Matagalpa",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=600",
    price: 150000,
    location: "Matagalpa",
    size: 50,
    sizeUnit: "mz",
    type: "Finca Ganadera",
    description: "Excelente finca ganadera con fuentes de agua naturales y buen pasto para el ganado."
  },
  {
    id: 2,
    title: "Terreno de Inversión en Rivas",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600",
    price: 75000,
    location: "Rivas",
    size: 10,
    sizeUnit: "mz",
    type: "Terreno",
    description: "Terreno con vista panorámica al mar, ideal para proyecto turístico o residencial."
  },
  {
    id: 3,
    title: "Finca Agrícola en Jinotega",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=600",
    price: 230000,
    location: "Jinotega",
    size: 35,
    sizeUnit: "mz",
    type: "Finca Agrícola",
    description: "Finca cafetalera en plena producción, con beneficio húmedo y excelente altura."
  },
  {
    id: 4,
    title: "Cantera con Permisos en León",
    imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=600",
    price: 320000,
    location: "León",
    size: 15,
    sizeUnit: "mz",
    type: "Cantera",
    description: "Cantera con todos los permisos de explotación al día y equipamiento incluido."
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
