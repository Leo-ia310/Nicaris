import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyFilter from '@/components/property/PropertyFilter';
import PropertyCard, { PropertyType } from '@/components/property/PropertyCard';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLocation } from 'react-router-dom';

// Mock data for properties
const allProperties: PropertyType[] = [
  {
    id: 1,
    title: "Finca de 30 Manzanas",
    imageUrl: "../public/ImagenesFinca/Finca30.jpeg",
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
    imageUrl: "public/ImagenesFinca/FincaMinera.jpeg",
    price: 5000000,
    location: "nagarote",
    size: 529,
    sizeUnit: "mz",
    type: "Cantera",
    description: "Mina de piedra cantera, con permisos de explotacion "
  },
  {
    id: 3,
    title: "Finca de 222 Manzanas ",
    imageUrl: "public/ImagenesFinca/Finca222.jpeg",
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
    imageUrl: "public/ImagenesFinca/Finca84.jpeg",
    price: 2100000,
    location: "Leon",
    size: 84,
    sizeUnit: "mz",
    type: "Finca ganadera",
    description: "Finca ganadera Full equipada"
  },
];

const Properties = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get('type') || '';

  const [properties, setProperties] = useState<PropertyType[]>(allProperties);
  const [filteredProperties, setFilteredProperties] = useState<PropertyType[]>(allProperties);
  const [isLoading, setIsLoading] = useState(false);

  const applyFilters = (filters: any) => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      let filtered = [...properties];
      
      // Filter by type
      if (filters.type) {
        filtered = filtered.filter(prop => 
          prop.type.toLowerCase().includes(filters.type.toLowerCase())
        );
      }
      
      // Filter by price range
      if (filters.price) {
        const [minPrice, maxPrice] = filters.price.split('-');
        if (minPrice && maxPrice) {
          filtered = filtered.filter(prop => 
            prop.price >= parseInt(minPrice) && prop.price <= parseInt(maxPrice)
          );
        } else if (minPrice && minPrice.includes('+')) {
          const min = parseInt(minPrice.replace('+', ''));
          filtered = filtered.filter(prop => prop.price >= min);
        }
      }
      
      // Filter by location
      if (filters.location) {
        filtered = filtered.filter(prop => 
          prop.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      
      // Filter by search term
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(prop => 
          prop.title.toLowerCase().includes(searchTerm) || 
          prop.description.toLowerCase().includes(searchTerm) ||
          prop.location.toLowerCase().includes(searchTerm) ||
          prop.type.toLowerCase().includes(searchTerm)
        );
      }
      
      setFilteredProperties(filtered);
      setIsLoading(false);
    }, 500);
  };

  // Initialize with URL params if present
  useEffect(() => {
    if (typeFromUrl) {
      applyFilters({ type: typeFromUrl });
    }
  }, [typeFromUrl]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Nuestras Propiedades</h1>
          <p className="mt-2 text-white/80">
            Explora nuestra selección de propiedades rurales, fincas y terrenos en Nicaragua
          </p>
        </div>
      </div>
      
      {/* Properties Content */}
      <section className="py-10 flex-1">
        <div className="container">
          {/* Property Filter */}
          <PropertyFilter 
            onFilterChange={applyFilters} 
            initialValues={{ type: typeFromUrl }}
          />
          
          {/* Properties Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'Propiedad' : 'Propiedades'} encontradas
              </h2>
            </div>
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nicaris-green mx-auto"></div>
                <p className="mt-4 text-nicaris-darkText">Cargando propiedades...</p>
              </div>
            ) : filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-nicaris-darkText text-lg">
                  No se encontraron propiedades con los criterios seleccionados.
                </p>
                <button 
                  onClick={() => applyFilters({})}
                  className="mt-4 btn-outline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber="+505 8866 2303" />
    </div>
  );
};

export default Properties;
