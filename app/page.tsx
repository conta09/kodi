import React from 'react';
import LandingHero from './components/LandingHero';
import PropertiesGrid from './components/PropertiesGrid';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="">
      <LandingHero />
      <PropertiesGrid />
      <Footer />
    </div>
  );
}

