
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
    title: "Finca Ganadera en Matagalpa",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=600",
    price: 150000,
    location: "Matagalpa",
    size: 50,
    sizeUnit: "mz",
    type: "Finca Ganadera",
    description: "Excelente finca ganadera con fuentes de agua naturales, buen pasto para el ganado y casa de habitación."
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
  },
  {
    id: 5,
    title: "Casa Residencial en Granada",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600",
    price: 180000,
    location: "Granada",
    size: 300,
    sizeUnit: "m²",
    type: "Casa",
    description: "Hermosa casa colonial restaurada en el centro histórico de Granada."
  },
  {
    id: 6,
    title: "Terreno Agrícola en Chinandega",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=600",
    price: 95000,
    location: "Chinandega",
    size: 15,
    sizeUnit: "mz",
    type: "Terreno Agrícola",
    description: "Terreno fértil ideal para cultivos de maní, con acceso a agua para riego."
  },
  {
    id: 7,
    title: "Finca Mixta en Estelí",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=600",
    price: 280000,
    location: "Estelí",
    size: 60,
    sizeUnit: "mz",
    type: "Finca Mixta",
    description: "Finca con área ganadera y agrícola, casa principal, bodega y beneficio."
  },
  {
    id: 8,
    title: "Propiedad para Desarrollo Turístico",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600",
    price: 450000,
    location: "Rivas",
    size: 25,
    sizeUnit: "mz",
    type: "Inversión",
    description: "Espectacular propiedad con playa privada, ideal para desarrollo turístico."
  }
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
