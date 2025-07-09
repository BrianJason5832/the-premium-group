
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Successfully Submitted!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div>
              <h1 className="text-8xl md:text-9xl font-light mb-4 text-white">CONTACT</h1>
              <h2 className="text-6xl text-red-500 font-light italic mb-8">Us</h2>
            </div>
            
            {/* Right side - Empty for spacing */}
            <div></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Contact Form */}
            <div className="bg-white p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-light mb-4">
                  We would love to hear from you! Send us a message and we'll get right back in touch.
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 text-sm font-light mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-light mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-600 text-sm font-light mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 text-sm font-light mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 text-sm font-light mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <span className="text-sm font-light tracking-wider">SEND</span>
                </button>
              </form>
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
              
              <div className="space-y-6 text-sm font-light">
                <div className="flex items-center space-x-3">
                  <span className="text-white/60">✉</span>
                  <span>office@premiumgroup.com</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-white/60 mt-1">📍</span>
                    <span>8604 Sunset Blvd. West Hollywood, CA 90069</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-white/60 mt-1">📍</span>
                    <span>3140 East Coast Hwy., Newport Beach, CA 92625</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-white/60 mt-1">📍</span>
                    <span>7925 Girard Avenue, La Jolla, CA 92037</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-white/60 mt-1">📍</span>
                    <span>Paseo de la Marina 4732 Col. El Medano, 23453, Cabo San Lucas, BCS, MX 92625</span>
                  </div>
                </div>
                
                <div className="pt-6">
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">👤</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">f</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">X</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">YT</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">in</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <span className="text-xs">IG</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section 
        className="py-32 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl font-light text-white mb-4">
              JOIN OUR
            </h2>
            <h3 className="text-4xl text-red-500 font-light italic mb-8">Network</h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Keep up to date with the latest market trends and opportunities in Los Angeles, Orange County, San Diego and Cabo San Lucas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
