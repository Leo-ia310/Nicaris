import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => { 
      setIsLoading(true);
      try {
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1z535l_nlwJ-G3AnE16cqGossy4yBe0Wx4sNkpJ6ecxE/values/Backend2?key=AIzaSyDqkyWiU-HicT3Z5ltVxomucHt671y0Tro');
        const data = await response.json();

        if (data.values && Array.isArray(data.values)) {
          const transformedData = data.values.slice(1).map(row => ({
            id: row[0],
            title: row[1],
            imageUrl: row[19],
            price: parseFloat(row[6]) || 0,
            location: row[4],
            size: row[13] || row[11] || 0,
            sizeUnit: row[53],
            type: row[7],
            description: row[2],
          }));

          // Seleccionar 4 propiedades aleatorias
          const randomProperties = transformedData.sort(() => 0.5 - Math.random()).slice(0, 4);
          setFeaturedProperties(randomProperties);
        } else {
          console.error('La respuesta no contiene un array en data.values:', data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="section-spacing ">
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
              className="bg-white rounded-lg overflow-hidden card-shadow hover:translate-y-[-20px] hover:shadow-black transition-all duration-300  shadow-black "
            >
              <Link to={`/property/${property.id}`}>
                <div className="relative h-48  shadow-black ">
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
