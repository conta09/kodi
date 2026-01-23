import React from 'react';
import LandingHero from './components/LandingHero';
import PropertiesGrid from './components/PropertiesGrid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <LandingHero />
      <PropertiesGrid />
      <Footer />
    </div>
  );
}

