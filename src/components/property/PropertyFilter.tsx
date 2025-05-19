
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface FilterValues {
  type: string;
  price: string;
  location: string;
  usage: string;
  search: string;
}

interface PropertyFilterProps {
  onFilterChange: (filters: FilterValues) => void;
  initialValues?: Partial<FilterValues>;
}

const PropertyFilter = ({ 
  onFilterChange,
  initialValues = {}
}: PropertyFilterProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    type: initialValues.type || '',
    price: initialValues.price || '',
    location: initialValues.location || '',
    usage: initialValues.usage || '',
    search: initialValues.search || ''
  });
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };
  
  // Reset filters
  const handleReset = () => {
    const resetValues = {
      type: '',
      price: '',
      location: '',
      usage: '',
      search: ''
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };
  
  // Apply filters when component mounts with initial values
  useEffect(() => {
    if (Object.keys(initialValues).length > 0) {
      onFilterChange(filters);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Property Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-nicaris-darkText mb-1">
              Tipo de Propiedad
            </label>
            <select
              id="type"
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-nicaris-darkText focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
            >
              <option value="">Todos los tipos</option>
              <option value="finca">Finca</option>
              <option value="terreno">Terreno</option>
              <option value="casa">Casa</option>
              <option value="cantera">Cantera</option>
              <option value="inversion">Inversión</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-nicaris-darkText mb-1">
              Rango de Precio
            </label>
            <select
              id="price"
              name="price"
              value={filters.price}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-nicaris-darkText focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
            >
              <option value="">Cualquier precio</option>
              <option value="0-50000">Hasta $50,000</option>
              <option value="50000-100000">$50,000 - $100,000</option>
              <option value="100000-200000">$100,000 - $200,000</option>
              <option value="200000-500000">$200,000 - $500,000</option>
              <option value="500000+">Más de $500,000</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-nicaris-darkText mb-1">
              Ubicación
            </label>
            <select
              id="location"
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-nicaris-darkText focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
            >
              <option value="">Todas las ubicaciones</option>
              <option value="managua">Managua</option>
              <option value="granada">Granada</option>
              <option value="leon">León</option>
              <option value="matagalpa">Matagalpa</option>
              <option value="jinotega">Jinotega</option>
              <option value="rivas">Rivas</option>
              <option value="chinandega">Chinandega</option>
              <option value="esteli">Estelí</option>
            </select>
          </div>

          {/* Usage Type */}
          <div>
            <label htmlFor="usage" className="block text-sm font-medium text-nicaris-darkText mb-1">
              Tipo de Uso
            </label>
            <select
              id="usage"
              name="usage"
              value={filters.usage}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-nicaris-darkText focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
            >
              <option value="">Todos los usos</option>
              <option value="agricola">Agrícola</option>
              <option value="ganadero">Ganadero</option>
              <option value="turistico">Turístico</option>
              <option value="urbano">Urbano</option>
              <option value="comercial">Comercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-nicaris-darkText mb-1">
              Búsqueda
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                name="search"
                value={filters.search}
                onChange={handleChange}
                placeholder="Buscar por palabra clave..."
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-nicaris-darkText focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
              />
              <Search size={18} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="btn-outline py-1.5 px-4 w-full sm:w-auto"
          >
            Limpiar filtros
          </button>
          <button
            type="submit"
            className="btn-primary py-1.5 px-6 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Buscar Propiedades
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
