
import React from 'react';

const AgentProfile = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-red-500 text-sm font-bold mr-4">02</span>
              <div className="w-16 h-px bg-red-500"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-4">JASON</h2>
            <h3 className="text-4xl text-red-500 font-light italic mb-8">Premium</h3>
            <div className="w-24 h-px bg-white/30 mb-8"></div>
            <p className="text-lg font-light leading-relaxed mb-6">
              As President and Founder of <span className="underline">The Premium Group</span>, Jason leads a team
              responsible for representing buyers and sellers of distinguished properties
              throughout Southern California. He was recognized as the Best Real Estate
              Agent in Los Angeles by prestigious industry publications.
            </p>
            <p className="text-lg font-light leading-relaxed">
              With over $3.5 billion in sales volume and a track record of breaking
              multiple price records, Jason has established himself as one of the most
              successful luxury real estate agents in the world.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070"
              alt="Jason Premium"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;
