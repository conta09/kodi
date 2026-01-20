import PropertyCard from './PropertyCard';

const PropertiesGrid = () => {
  const properties = [
    {
      id: 1,
      propertyType: 'Condo',
      price: '$1,450',
      beds: '1 bed',
      baths: '1 bath',
      sqft: '700 sqft',
      address: '3001 Cedar St Unit A214',
      location: 'Austin, TX 78705',
      imageUrl: '/pr1.jpg'
    },
    {
      id: 2,
      propertyType: 'Apartment',
      priceRange: '$1,151 - $2,105',
      beds: 'Studio - 2 bed',
      baths: '1-2 bath',
      sqft: '800-1200 sqft',
      address: '11119 Alterra Pkwy',
      location: 'Austin, TX 78758',
      imageUrl: '/pr2.jpg',
      isRange: true
    },
    {
      id: 3,
      propertyType: 'Apartment',
      priceRange: '$1,085 - $1,464',
      beds: '1-2 bed',
      baths: '1-2 bath',
      sqft: '750-1100 sqft',
      address: '13301 Dessau Rd',
      location: 'Austin, TX 78754',
      imageUrl: '/pr3.jpg',
      isRange: true
    },
    {
      id: 4,
      propertyType: 'Apartment',
      priceRange: '$1,170 - $1,970',
      beds: '1-2 bed',
      baths: '1-2 bath',
      sqft: '800-1300 sqft',
      address: '1900 Airport Commerce Dr',
      location: 'Austin, TX 78741',
      imageUrl: '/pr4.jpg',
      isRange: true
    },
    // Add 4 more properties for 2nd row
    {
      id: 5,
      propertyType: 'Townhouse',
      price: '$2,250',
      beds: '3 bed',
      baths: '2 bath',
      sqft: '1,200 sqft',
      address: '4502 Riverside Dr',
      location: 'Austin, TX 78704',
      imageUrl: '/pr3.jpg'
    },
    {
      id: 6,
      propertyType: 'Condo',
      price: '$1,850',
      beds: '2 bed',
      baths: '2 bath',
      sqft: '950 sqft',
      address: '8701 Research Blvd',
      location: 'Austin, TX 78758',
      imageUrl: '/pr4.jpg'
    },
    {
      id: 7,
      propertyType: 'Apartment',
      priceRange: '$1,350 - $2,050',
      beds: '1-3 bed',
      baths: '1-2 bath',
      sqft: '700-1300 sqft',
      address: '11200 Lakeline Blvd',
      location: 'Austin, TX 78717',
      imageUrl: '/pr1.jpg',
      isRange: true
    },
    {
      id: 8,
      propertyType: 'House',
      price: '$2,950',
      beds: '4 bed',
      baths: '3 bath',
      sqft: '2,100 sqft',
      address: '5600 Burnet Rd',
      location: 'Austin, TX 78756',
      imageUrl: '/pr2.jpg'
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Available Properties
          </h2>
          <p className="text-gray-600 text-sm">
            {properties.length} properties in Austin, TX
          </p>
        </div>

        {/* Compact Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              propertyType={property.propertyType}
              price={property.price || ''}
              priceRange={property.priceRange}
              beds={property.beds}
              baths={property.baths}
              sqft={property.sqft}
              address={property.address}
              location={property.location}
              imageUrl={property.imageUrl}
              isRange={property.isRange}
            />
          ))}
        </div>

        {/* Simple Pagination/View More */}
        <div className="flex justify-center mt-10">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              ← Previous
            </button>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  num === 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesGrid;