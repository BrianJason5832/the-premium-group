
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Buyers = () => {
  return (
    <div className="min-h-screen bg-black text-white">
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
              <h1 className="text-8xl md:text-9xl font-light mb-4">BUY</h1>
              <h2 className="text-6xl text-red-500 font-light italic mb-8">With Us</h2>
            </div>
            
            {/* Right side - Real Estate Image */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070"
                alt="Luxury Real Estate Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Text Content */}
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed">
                Purchasing a home is one of the most important decisions you'll make, and the right advice and guidance is paramount. Experience and expertise matter, and they can make a significant difference in making sure that you not only find the right house, but that you also pay the best price.
              </p>
              
              <p className="text-lg font-light leading-relaxed">
                At The Premium Group, we not only have a thorough understanding of the marketplace, we also have access to many properties that are off-market and an awareness of properties that are about to be listed. Most importantly, we are keenly aware of the nuances that determine value and we are discerning as to construction quality, materials, and craftsmanship. We will listen to your needs and find you the perfect home and we will make sure that you make an educated and informed decision. Once you choose a property we will represent your interest voiferously throughout the purchase process, negotiating the best possible purchase price, managing and advocating for you during inspections, escrow, title, and closing. We will also advise you on how to make the house even better, including furniture and design, and possible remodel ideas and augmentations where beneficial.
              </p>
              
              <p className="text-lg font-light leading-relaxed mb-8">
                Please contact us to set up a meeting.
              </p>
              
              <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
                <span className="text-sm font-light tracking-wider">CONTACT US</span>
              </button>
            </div>
            
            {/* Right side - Contact Info */}
            <div className="bg-black text-white p-8">
              <div className="mb-8">
                <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-light tracking-wider mb-2">THE PREMIUM GROUP</h3>
                <p className="text-red-500 text-sm font-light tracking-wider">REAL ESTATE</p>
              </div>
              
              <div className="space-y-4 text-sm font-light">
                <div>
                  <p className="text-white/80 mb-2">office@premiumgroup.com</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/80">8604 Sunset Blvd. West Hollywood, CA 90069</p>
                  <p className="text-white/80">3140 East Coast Hwy., Newport Beach, CA 92625</p>
                  <p className="text-white/80">7925 Girard Avenue, La Jolla, CA 92037</p>
                  <p className="text-white/80">Paseo de la Marina 4732 Col. El Medano, 23453, Cabo San Lucas, BCS, MX 92625</p>
                </div>
                
                <div className="pt-4">
                  <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">f</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">X</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">YT</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">in</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">IG</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buyers;
