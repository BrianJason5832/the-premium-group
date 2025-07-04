
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Properties = () => {
  const [priceRange, setPriceRange] = useState({ min: '$0M', max: '$100M' });
  const [neighborhood, setNeighborhood] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [minBaths, setMinBaths] = useState('');
  const [searchAddress, setSearchAddress] = useState('');

  const featuredProperties = [
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
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070'
    },
    {
      id: 3,
      price: '$39,000,000',
      location: '24844 Malibu Rd.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
    },
    {
      id: 4,
      price: '$28,500,000',
      location: '1250 Bel Air Rd.',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070'
    },
    {
      id: 5,
      price: '$32,750,000',
      location: 'Beverly Hills Estate',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070'
    },
    {
      id: 6,
      price: '$45,900,000',
      location: 'Malibu Oceanfront',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
    },
    {
      id: 7,
      price: '$21,750,000',
      location: 'Hollywood Hills Modern',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
    },
    {
      id: 8,
      price: '$18,850,000',
      location: 'Bel Air Contemporary',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070'
    },
    {
      id: 9,
      price: '$55,500,000',
      location: 'Pacific Palisades Estate',
      image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2070'
    },
    {
      id: 10,
      price: '$67,200,000',
      location: 'Santa Monica Penthouse',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070'
    },
    {
      id: 11,
      price: '$43,750,000',
      location: 'West Hollywood Luxury',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070'
    },
    {
      id: 12,
      price: '$29,900,000',
      location: 'Manhattan Beach Villa',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section with Search */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left side - Active Listings */}
            <div className="flex-1">
              <div className="mb-8">
                <h1 className="text-8xl font-light mb-4">ACTIVE</h1>
                <h2 className="text-6xl text-red-500 font-light italic">Listings</h2>
              </div>
            </div>

            {/* Right side - Search Form */}
            <div className="flex-1 max-w-md">
              <div className="bg-black/80 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-light mb-8 text-center">
                  SEARCH THE OPPENHEIM GROUP LISTINGS
                </h3>
                
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-light mb-2 tracking-wider">PRICE</label>
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                        className="flex-1 bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                        placeholder="$0M"
                      />
                      <input
                        type="text"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                        className="flex-1 bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                        placeholder="$100M"
                      />
                    </div>
                  </div>

                  {/* Neighborhood */}
                  <div>
                    <label className="block text-sm font-light mb-2 tracking-wider">NEIGHBORHOOD</label>
                    <select
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full bg-transparent border-b border-white/30 py-2 text-white focus:border-red-500 focus:outline-none"
                    >
                      <option value="" className="bg-black">Select Neighborhood</option>
                      <option value="beverly-hills" className="bg-black">Beverly Hills</option>
                      <option value="hollywood-hills" className="bg-black">Hollywood Hills</option>
                      <option value="malibu" className="bg-black">Malibu</option>
                      <option value="bel-air" className="bg-black">Bel Air</option>
                    </select>
                  </div>

                  {/* Beds and Baths */}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-light mb-2 tracking-wider">MIN BEDS</label>
                      <select
                        value={minBeds}
                        onChange={(e) => setMinBeds(e.target.value)}
                        className="w-full bg-transparent border-b border-white/30 py-2 text-white focus:border-red-500 focus:outline-none"
                      >
                        <option value="" className="bg-black">Any</option>
                        <option value="1" className="bg-black">1+</option>
                        <option value="2" className="bg-black">2+</option>
                        <option value="3" className="bg-black">3+</option>
                        <option value="4" className="bg-black">4+</option>
                        <option value="5" className="bg-black">5+</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-light mb-2 tracking-wider">MIN BATHS</label>
                      <select
                        value={minBaths}
                        onChange={(e) => setMinBaths(e.target.value)}
                        className="w-full bg-transparent border-b border-white/30 py-2 text-white focus:border-red-500 focus:outline-none"
                      >
                        <option value="" className="bg-black">Any</option>
                        <option value="1" className="bg-black">1+</option>
                        <option value="2" className="bg-black">2+</option>
                        <option value="3" className="bg-black">3+</option>
                        <option value="4" className="bg-black">4+</option>
                        <option value="5" className="bg-black">5+</option>
                      </select>
                    </div>
                  </div>

                  {/* Search by Address */}
                  <div>
                    <label className="block text-sm font-light mb-2 tracking-wider">SEARCH LISTING BY ADDRESS</label>
                    <input
                      type="text"
                      value={searchAddress}
                      onChange={(e) => setSearchAddress(e.target.value)}
                      className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                      placeholder="Enter address"
                    />
                  </div>

                  {/* Search Button */}
                  <button className="w-full mt-8 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300">
                    <span className="text-sm font-light tracking-wider">SEARCH</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.location}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-2xl font-light mb-1">{property.price}</p>
                    <p className="text-lg font-light">{property.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
