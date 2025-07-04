
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sellers = () => {
  const testimonials = [
    {
      quote: "The smartest thing I ever did was reaching out to you on this most important asset. Your judgments and guidance have been spot on from the outset. The strategy you laid out led so smoothly to the outcome...",
      author: "— Partner, O'Melveny & Myers LLP"
    },
    {
      quote: "As a real estate broker, attorney and licensed contractor, Jason Oppenheim provides unparalleled representation in every real estate transaction. Jason has represented us on multiple purchases and sales...",
      author: "— Dr. Jeffrey Hammoudegh",
      subtitle: "MD, DDS"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-8xl md:text-9xl font-light mb-4 text-white">LIST</h1>
              <h2 className="text-6xl text-red-500 font-light italic mb-8">With Us</h2>
            </div>
            
            {/* Right side - Modern luxury home image */}
            <div 
              className="h-96 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-light leading-relaxed mb-8">
              Choosing the correct real estate agent to sell your home is one of the most important decisions you'll make. It can be the difference between your home sitting on the market for months or selling quickly, for hundreds of thousands if not millions of dollars more. Your home is a very personal, important, and valuable asset, and it can be an emotional and complicated endeavor to sell it, especially in today's challenging marketplace. Numerous questions and concerns will need to be addressed, and the advice and consultation that you receive can make a tremendous difference in the results. Marketing and advertising, remodeling and/or upgrading, photography, internet exposure, staging, design, floor-plan measurements, videography, timing and presentation, inspections, pre-market exposure, agent outreach and relationships, open houses, pricing, and dozens more nuances and subtleties all make up the difference between failure and a successful sale.
            </p>
            
            <p className="text-lg font-light leading-relaxed mb-12">
              The Oppenheim Group is truly a full-service brokerage, and Jason Oppenheim is not just a real estate agent, he's a licensed real estate broker, as well as a licensed and practiced attorney and contractor in the State of California. He and his team are experienced and have a proven track record of success, in not just selling homes, but achieving record-breaking results for their clients.
            </p>
            
            <div className="text-center">
              <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
                <span className="text-sm font-light tracking-wider">LIST WITH US</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-light mb-4">WHAT OUR</h2>
            <h3 className="text-4xl text-red-500 font-light italic">Clients Are Saying</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black p-8 border-l-2 border-red-500">
                <p className="text-lg font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-light text-white/80">
                  {testimonial.author}
                </p>
                {testimonial.subtitle && (
                  <p className="text-sm font-light text-red-500 italic">
                    {testimonial.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-light tracking-wider mb-2">THE OPPENHEIM GROUP</h3>
            <p className="text-red-500 text-sm font-light tracking-wider">REAL ESTATE</p>
          </div>
          
          <div className="space-y-4 text-sm font-light">
            <p>office@ogroup.com</p>
            <p>CA Broker Lic. # 01983697</p>
            
            <div className="space-y-2">
              <p>8604 Sunset Blvd. West Hollywood, CA 90069</p>
              <p>3140 East Coast Hwy., Newport Beach, CA 92625</p>
              <p>7925 Girard Avenue, La Jolla, CA 92037</p>
              <p>Paseo de la Marina 4732 Col. El Medano, 23453, Cabo San Lucas, BCS, MX</p>
            </div>
            
            <p className="text-xs text-gray-600 mt-6">
              Luxury Real Estate, Homes, Estates, Properties in the Hollywood Hills, Sunset Strip, Bird Streets, West Hollywood, Beverly Hills, Bel Air, Brentwood, Encino, Laurel Canyon, Fryman Estates, Holmby Hills, Little Holmby, Los Angeles, Downtown, Malibu, Miracle Mile, Pacific Palisades, Santa Monica, Venice, Sherman Oaks, Studio City, Westwood, Hollywood, Silver Lake, Los Feliz, Manhattan Beach, Palos Verdes.
            </p>
            
            <div className="flex justify-center space-x-4 pt-4">
              <p className="text-sm">LA: 323.910.1675</p>
              <p className="text-sm">OC: 949.407.9745</p>
              <p className="text-sm">SD: 949.407.9745</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sellers;
