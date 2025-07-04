
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Philanthropy = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Main Content Section */}
      <section className="pt-20 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-8xl md:text-9xl font-bold mb-8">PHILANTHROPY</h1>
            </div>
            
            <div className="max-w-5xl">
              <p className="text-lg font-light leading-relaxed">
                The Oppenheim Group is a proud supporter of Food on Foot, a local Los Angeles non-profit organization, donating over $100,000 and raising more than $300,000 in the continuing effort to assist the unhoused and low-income population in Los Angeles. Food on Foot provides nutritious meals, clothing, and a fresh start through life-skills training, full-time employment, and permanent housing. They distribute food, clothing, and hygiene products to hundreds of people in Hollywood every Sunday, with a total of 20,000+ meals distributed annually. Their Jobs and Housing program also helps employable individuals and families experiencing homelessness to secure employment, housing, life-skills training, and long-term self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philanthropy;
