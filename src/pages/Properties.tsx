import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyFilter from '@/components/property/PropertyFilter';
import PropertyCard, { PropertyType } from '@/components/property/PropertyCard';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLocation, useNavigate } from 'react-router-dom';

const Properties = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get('type') || '';

  const [propertiesData, setPropertiesData] = useState<PropertyType[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    type: typeFromUrl,
    price: '',
    location: '',
    search: ''
  });

  // Fetch properties from Google Sheets
  useEffect(() => {
    const fetchProperties = async () => { 
      setIsLoading(true);
      try {
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1z535l_nlwJ-G3AnE16cqGossy4yBe0Wx4sNkpJ6ecxE/values/Backend2?key=AIzaSyDqkyWiU-HicT3Z5ltVxomucHt671y0Tro');
        const data = await response.json();

        if (Array.isArray(data.values)) {
          const transformedData = data.values.slice(1).map(row => ({
            id: row[0], // ID
            title: row[1], // Título
            imageUrl: row[19], // URL de la imagen
            price: parseFloat(row[6]) || 0, // Precio
            location: row[4], // Ubicación
            size: row[13] || row[11] || 0, // Tamaño
            sizeUnit: row[54], // Unidad de tamaño
            type: row[7], // Tipo 
            description: row[2], // Descripción
          }));

          setPropertiesData(transformedData);
          setFilteredProperties(transformedData); // Inicializa filteredProperties con todos los datos
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

  // Sincroniza el filtro 'type' con la URL cada vez que cambia el parámetro
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      type: typeFromUrl
    }));
  }, [typeFromUrl]);

  // Aplica los filtros cada vez que cambian los filtros o los datos
  useEffect(() => {
    setIsLoading(true);

    let filtered = [...propertiesData];
    const { type, price, location, search } = filters;

    // Si no hay filtros aplicados, mostrar todas las propiedades
    if (!type && !price && !location && !search) {
      setFilteredProperties(filtered);
      setIsLoading(false);
      return;
    }

    // Filtrar por tipo
    if (type && type !== 'todos') {
      filtered = filtered.filter(prop =>
        prop.type?.toLowerCase().includes(type.toLowerCase())
      );
    }

    // Filtrar por rango de precio
    if (price) {
      const [minPrice, maxPrice] = price.split('-');
      if (minPrice && maxPrice) {
        filtered = filtered.filter(prop =>
          prop.price >= parseInt(minPrice) && prop.price <= parseInt(maxPrice)
        );
      } else if (minPrice && minPrice.includes('+')) {
        const min = parseInt(minPrice.replace('+', ''));
        filtered = filtered.filter(prop => prop.price >= min);
      }
    }

    // Filtrar por ubicación
    if (location) {
      filtered = filtered.filter(prop =>
        prop.location?.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filtrar por término de búsqueda
    if (search) {
      const searchTerm = search.toLowerCase();
      filtered = filtered.filter(prop =>
        prop.title?.toLowerCase().includes(searchTerm) ||
        prop.description?.toLowerCase().includes(searchTerm) ||
        prop.location?.toLowerCase().includes(searchTerm) ||
        prop.type?.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProperties(filtered);
    setIsLoading(false);
  }, [filters, propertiesData]);

  // Cuando el usuario cambia los filtros desde el filtro visual
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    // Si el filtro de tipo cambia, actualiza la URL
    if (newFilters.type !== typeFromUrl) {
      const params = new URLSearchParams(location.search);
      if (newFilters.type) {
        params.set('type', newFilters.type);
      } else {
        params.delete('type');
      }
      navigate({ search: params.toString() }, { replace: true });
    }
  };
  

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
            onFilterChange={handleFilterChange} 
            initialValues={filters}
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
                  onClick={() => setFilters({ type: '', price: '', location: '', search: '' })}
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