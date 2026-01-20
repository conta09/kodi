import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';

type PropertyCardProps = {
  propertyType: string;
  price: string;
  priceRange?: string;
  beds: string;
  baths: string;
  sqft: string;
  address: string;
  location: string;
  imageUrl: string;
  isRange?: boolean;
};

const PropertyCard = ({
  propertyType,
  price,
  priceRange,
  beds,
  baths,
  sqft,
  address,
  location,
  imageUrl,
  isRange = false,
}: PropertyCardProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Property Image Section - Compact */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={address}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Top Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Top Row - Badge and Favorite */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">
            {propertyType}
          </span>
          
          <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
            <Heart className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* Bottom Row - Price */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
            <span className="font-bold text-gray-900 text-lg">
              {isRange ? priceRange : price}
            </span>
            <span className="text-xs text-gray-600 ml-1">/month</span>
          </div>
        </div>
      </div>

      {/* Property Details - Compact */}
      <div className="p-4">
        {/* Address - Single Line */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{address}</h3>
            <p className="text-sm text-gray-600 truncate">{location}</p>
          </div>
        </div>

        {/* Features - Compact Horizontal */}
        <div className="flex items-center justify-between text-gray-700 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{beds}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{baths}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{sqft}</span>
          </div>
        </div>

        {/* Single Action Button */}
        
      </div>
    </div>
  );
};

export default PropertyCard;