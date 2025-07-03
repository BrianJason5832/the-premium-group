
import React from 'react';

const CompanyStats = () => {
  const stats = [
    { number: '3.5B+', label: 'SALES VOLUME' },
    { number: '210K+', label: 'EMAIL SUBSCRIBERS' },
    { number: '17M+', label: 'SOCIAL MEDIA FOLLOWERS' },
    { number: '90+', label: 'AGENTS' }
  ];

  return (
    <section 
      className="py-32 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070')`
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="text-red-500 text-sm font-bold mr-4">04</span>
            <div className="w-16 h-px bg-red-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-4">
            WHY WORK WITH US
          </h2>
          <h3 className="text-4xl text-red-500 font-light italic">Our Numbers</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-6xl font-light text-white mb-4">
                {stat.number}
              </h3>
              <p className="text-white/80 text-sm font-light tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
