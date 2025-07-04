
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider">
            ABOUT US
          </h1>
          <div className="w-32 h-px bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
            Luxury Real Estate Excellence Since 1889
          </p>
        </div>
      </section>
      
      {/* About Page Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-8xl md:text-9xl font-light mb-8">THE</h1>
              <h2 className="text-7xl md:text-8xl font-bold mb-4">OPPENHEIM</h2>
              <h3 className="text-6xl text-red-500 font-light italic">Group</h3>
            </div>
            
            <div className="max-w-4xl">
              <p className="text-lg font-light leading-relaxed mb-8">
                The Oppenheim Group is a professional real estate brokerage serving <span className="underline">buyers</span> and <span className="underline">sellers of luxury property in Los Angeles</span>, Orange County, <span className="underline">San Diego</span>, and <span className="underline">Cabo San Lucas, Mexico</span>. The brokerage is composed of a close group of talented Realtors led by the firm's President and Founder, Jason Oppenheim. With more than $3.5B+ in total sales and $500 million in active listings, the firm closes hundreds of deals annually and has brokered many of the region's largest residential sales, including numerous record-breaking transactions. With offices in West Hollywood, Newport, San Diego, and Cabo San Lucas, The Oppenheim Group is the preeminent brokerage in the region, doing tremendous business throughout Southern California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                alt="Historic Hollywood aerial view"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="w-16 h-px bg-red-500 mb-4"></div>
                <h2 className="text-6xl md:text-7xl font-light mb-4">OUR</h2>
                <h3 className="text-4xl text-red-500 font-light italic mb-8">History</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed">
                  Founded in Hollywood by Jacob Stern in 1889 as The Stern Realty Co., The Oppenheim Group represents five generations of real estate development, management and brokerage services in Los Angeles. Jacob Stern, Brett and Jason's great-great-grandfather, was one of the preeminent real estate entrepreneurs of early Los Angeles.
                </p>
                
                <p className="text-lg font-light leading-relaxed">
                  Jacob built his personal residence on a five-acre parcel at the now world-famous corner of Hollywood and Vine. In 1925, the family constructed the Hollywood Plaza Hotel, which was the preferred luxury destination of the entertainment industry in the early years of Hollywood, and is now preserved as a California Historic Landmark. However, it was the lease of Jacob Stern's horse
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Network Section */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-7xl md:text-8xl font-light text-white mb-4">JOIN OUR</h2>
            <h3 className="text-5xl text-red-500 font-light italic mb-8">Network</h3>
            
            <p className="text-xl text-white font-light leading-relaxed mb-12">
              Keep up to date with the latest market trends and opportunities in<br />
              Los Angeles, Orange County, San Diego and Cabo San Lucas.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white text-sm font-light mb-2 tracking-wider text-left">NAME</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/50 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-light mb-2 tracking-wider text-left">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/50 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-white text-sm font-light mb-2 tracking-wider text-left">MESSAGE</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/50 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
