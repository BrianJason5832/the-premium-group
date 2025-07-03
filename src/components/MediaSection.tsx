
import React from 'react';

const MediaSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-red-500 text-sm font-bold mr-4">05</span>
              <div className="w-16 h-px bg-red-500"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-4">IN THE</h2>
            <h3 className="text-4xl text-red-500 font-light italic mb-8">Media</h3>
            
            <p className="text-lg font-light leading-relaxed mb-8">
              The Premium Group receives significant attention within the real estate community and
              beyond; the brokerage is the focus of the hit Netflix original series, Selling Sunset and Selling the OC,
              as Jason and his elite agents sell luxury homes to their affluent and celebrity clients. With more than
              $400 million in active listings, the brokerage boasts unparalleled market expertise.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-900 p-6">
              <h4 className="text-xl font-bold mb-2">THE WALL STREET JOURNAL</h4>
              <h5 className="text-lg font-light mb-4">MALIBU HOUSE RANCH HITS THE MARKET FOR $17.3 MILLION</h5>
              <p className="text-gray-400 mb-4">
                The sellers paid just under $1 million when they bought the 4-acre property in 1994
              </p>
              <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
                <span className="text-sm font-light tracking-wider">READ MORE +</span>
              </button>
            </div>
            
            <div className="bg-gray-900 p-6">
              <h4 className="text-xl font-bold mb-2">THE WALL STREET JOURNAL</h4>
              <h5 className="text-lg font-light mb-4">JASON PREMIUM LISTS KANYE WEST'S MALIBU HOME FOR $53,000,000</h5>
              <p className="text-gray-400 mb-4">
                The rapper started a gut renovation of the Tadao Ando-designed oceanfront house soon after buying it...
              </p>
              <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
                <span className="text-sm font-light tracking-wider">READ MORE +</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
