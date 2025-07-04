
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import AgentProfile from '../components/AgentProfile';
import ConciergeService from '../components/ConciergeService';
import CompanyStats from '../components/CompanyStats';
import MediaSection from '../components/MediaSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect} />
      <FeaturedListings selectedLocation={selectedLocation} />
      <AgentProfile />
      <ConciergeService />
      <CompanyStats />
      <MediaSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
