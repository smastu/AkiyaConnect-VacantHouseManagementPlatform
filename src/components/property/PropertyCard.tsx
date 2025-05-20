import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Calendar, ArrowRight } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-0 left-0 m-3">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.propertyType}
          </span>
        </div>
        {property.renovated && (
          <div className="absolute top-0 right-0 m-3">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              リノベーション済
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location.prefecture}{property.location.city}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{property.title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-indigo-700">
            {property.price.toLocaleString()}円
          </span>
          {property.status === 'available' ? (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              販売中
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              商談中
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center text-gray-700">
            <Home className="w-4 h-4 mr-1 text-gray-500" />
            <span>{property.size}㎡</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-1 text-gray-500" />
            <span>築{property.age}年</span>
          </div>
        </div>
        <Link 
          to={`/properties/${property.id}`}
          className="w-full inline-flex items-center justify-center bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          詳細を見る
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;