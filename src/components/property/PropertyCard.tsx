
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export interface PropertyType {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  location: string;
  size: number;
  sizeUnit: string;
  type: string;
  description: string;
}

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow hover:translate-y-[-5px] transition-all duration-300">
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
  );
};

export default PropertyCard;
