
import React from 'react';

interface FeaturedListingsProps {
  selectedLocation?: string;
}

const FeaturedListings = ({ selectedLocation }: FeaturedListingsProps) => {
  const getPropertiesByLocation = () => {
    const baseProperties = {
      'LOS ANGELES': [
        {
          id: 1,
          price: '$45,900,000',
          location: 'Beverly Hills Estate',
          image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070'
        },
        {
          id: 2,
          price: '$32,500,000',
          location: 'Hollywood Hills Modern',
          image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070'
        },
        {
          id: 3,
          price: '$28,750,000',
          location: 'West Hollywood Luxury',
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
        },
        {
          id: 4,
          price: '$21,200,000',
          location: 'Bel Air Contemporary',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070'
        },
        {
          id: 5,
          price: '$38,900,000',
          location: 'Sunset Strip Villa',
          image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070'
        },
        {
          id: 6,
          price: '$42,750,000',
          location: 'Pacific Palisades Estate',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
        },
        {
          id: 7,
          price: '$19,500,000',
          location: 'Santa Monica Penthouse',
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
        },
        {
          id: 8,
          price: '$15,850,000',
          location: 'Venice Beach Modern',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070'
        }
      ],
      'NEWPORT BEACH': [
        {
          id: 1,
          price: '$25,900,000',
          location: 'Newport Bay Oceanfront',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
        },
        {
          id: 2,
          price: '$18,500,000',
          location: 'Balboa Island Estate',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070'
        },
        {
          id: 3,
          price: '$32,200,000',
          location: 'Corona del Mar Villa',
          image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070'
        },
        {
          id: 4,
          price: '$22,750,000',
          location: 'Newport Coast Modern',
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
        },
        {
          id: 5,
          price: '$28,900,000',
          location: 'Harbor View Estate',
          image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070'
        },
        {
          id: 6,
          price: '$16,500,000',
          location: 'Bay Front Luxury',
          image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070'
        },
        {
          id: 7,
          price: '$35,200,000',
          location: 'Peninsula Point Estate',
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
        },
        {
          id: 8,
          price: '$24,850,000',
          location: 'Lido Isle Waterfront',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070'
        }
      ],
      'SAN DIEGO': [
        {
          id: 1,
          price: '$22,500,000',
          location: 'La Jolla Oceanfront',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
        },
        {
          id: 2,
          price: '$18,900,000',
          location: 'Del Mar Beach Estate',
          image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070'
        },
        {
          id: 3,
          price: '$15,750,000',
          location: 'Rancho Santa Fe Villa',
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
        },
        {
          id: 4,
          price: '$26,200,000',
          location: 'Coronado Bay Estate',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070'
        },
        {
          id: 5,
          price: '$19,850,000',
          location: 'Solana Beach Modern',
          image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070'
        },
        {
          id: 6,
          price: '$24,500,000',
          location: 'Point Loma Cliffside',
          image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070'
        },
        {
          id: 7,
          price: '$17,900,000',
          location: 'Carlsbad Coastal Villa',
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
        },
        {
          id: 8,
          price: '$21,750,000',
          location: 'Encinitas Luxury Estate',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070'
        }
      ],
      'CABO': [
        {
          id: 1,
          price: '$164,900,000',
          location: 'Venado Blanco',
          image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070'
        },
        {
          id: 2,
          price: '$45,500,000',
          location: 'Pedregal Oceanfront',
          image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070'
        },
        {
          id: 3,
          price: '$32,900,000',
          location: 'Cabo Del Sol Estate',
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
        },
        {
          id: 4,
          price: '$28,750,000',
          location: 'Palmilla Beach Villa',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070'
        },
        {
          id: 5,
          price: '$38,200,000',
          location: 'Los Cabos Marina',
          image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070'
        },
        {
          id: 6,
          price: '$22,900,000',
          location: 'Chileno Bay Resort',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
        },
        {
          id: 7,
          price: '$35,500,000',
          location: 'Esperanza Auberge',
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
        },
        {
          id: 8,
          price: '$26,750,000',
          location: 'Quivira Golf Estate',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070'
        }
      ]
    };

    if (selectedLocation && baseProperties[selectedLocation as keyof typeof baseProperties]) {
      return baseProperties[selectedLocation as keyof typeof baseProperties];
    }

    // Default properties when no location is selected
    return [
      {
        id: 1,
        price: '$164,900,000',
        location: 'Venado Blanco',
        image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070'
      },
      {
        id: 2,
        price: '$39,975,000',
        location: '8408 Hillside Ave.',
        image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070'
      },
      {
        id: 3,
        price: '$28,500,000',
        location: 'Modern Estate',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
      },
      {
        id: 4,
        price: '$15,750,000',
        location: 'Luxury Villa',
        image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070'
      },
      {
        id: 5,
        price: '$22,500,000',
        location: 'Beverly Hills Estate',
        image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070'
      },
      {
        id: 6,
        price: '$18,900,000',
        location: 'Malibu Oceanfront',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
      },
      {
        id: 7,
        price: '$12,750,000',
        location: 'Hollywood Hills',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
      },
      {
        id: 8,
        price: '$9,850,000',
        location: 'Bel Air Contemporary',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070'
      }
    ];
  };

  const properties = getPropertiesByLocation();

  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-red-500 text-sm font-bold mr-4">01</span>
              <div className="w-16 h-px bg-red-500"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-4">
              FEATURED
            </h2>
            <h3 className="text-4xl text-red-500 font-light italic">
              {selectedLocation ? `${selectedLocation} Listings` : 'Listings'}
            </h3>
          </div>
          
          <button className="mt-8 px-8 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
            <span className="text-sm font-light tracking-wider">VIEW ALL PROPERTIES +</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={property.image}
                  alt={property.location}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-3xl font-light mb-1">{property.price}</p>
                  <p className="text-lg font-light">{property.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
