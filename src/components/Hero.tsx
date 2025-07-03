
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 border-3 border-red-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-white mb-4">
            THE PREMIUM GROUP
          </h1>
          <div className="w-32 h-px bg-white mx-auto mb-4"></div>
          <p className="text-red-500 text-xl font-light tracking-[0.3em]">REAL ESTATE</p>
        </div>

        {/* Location Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {['LOS ANGELES', 'NEWPORT BEACH', 'SAN DIEGO', 'CABO'].map((location) => (
            <button
              key={location}
              className="group relative px-8 py-4 bg-black/50 backdrop-blur-sm border border-white/30 hover:border-red-500 transition-all duration-300"
            >
              <span className="text-white text-sm font-light tracking-wider group-hover:text-red-500 transition-colors">
                {location}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
