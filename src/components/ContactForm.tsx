
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      className="py-32 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070')`
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="text-red-500 text-sm font-bold mr-4">10</span>
            <div className="w-16 h-px bg-red-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-4">
            JOIN OUR
          </h2>
          <h3 className="text-4xl text-red-500 font-light italic mb-8">Network</h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Keep up to date with the latest market trends and opportunities in
            Los Angeles, Orange County, San Diego and Cabo San Lucas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-light tracking-wider mb-2">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 focus:border-red-500 outline-none py-3 text-white placeholder-white/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm font-light tracking-wider mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 focus:border-red-500 outline-none py-3 text-white placeholder-white/50 transition-colors"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-white text-sm font-light tracking-wider mb-2">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-white/30 focus:border-red-500 outline-none py-3 text-white placeholder-white/50 resize-none transition-colors"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-12 py-4 bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
          >
            <span className="text-sm font-light tracking-wider">SEND MESSAGE</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
