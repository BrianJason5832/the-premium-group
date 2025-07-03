
import React from 'react';

const ConciergeService = () => {
  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-red-500 text-sm font-bold mr-4">03</span>
              <div className="w-16 h-px bg-red-500"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-4">CONCIERGE</h2>
            <h3 className="text-4xl text-red-500 font-light italic mb-8">Service</h3>
            
            <p className="text-lg font-light leading-relaxed mb-8">
              The Premium Group's Concierge aims to prepare your home for an optimal launch on the
              market. After assessing your property's needs via a walkthrough, we work together in creating
              opportunities to increase its value and profitability.
            </p>
            
            <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
              <span className="text-sm font-light tracking-wider">LEARN MORE +</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070"
              alt="Luxury Interior"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070"
              alt="Modern Living"
              className="w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeService;
