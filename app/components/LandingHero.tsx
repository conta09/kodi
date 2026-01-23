'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

type Tab = 'commercial' | 'rent' | 'buy' | 'sell';

type PropertyType =
  | 'office'
  | 'shop'
  | 'building'
  | 'industrial'
  | 'home'
  | 'apartment';

const tabs: { key: Tab; label: string }[] = [
  { key: 'commercial', label: 'Commercial' },
  { key: 'rent', label: 'Rent' },
  { key: 'buy', label: 'Buy' },
  { key: 'sell', label: 'Sell' },
];

const subOptions: Record<
  Exclude<Tab, 'sell'>,
  { key: PropertyType; label: string }[]
> = {
  commercial: [
    { key: 'office', label: 'Office' },
    { key: 'shop', label: 'Shop' },
    { key: 'building', label: 'Building' },
    { key: 'industrial', label: 'Industrial' },
  ],
  rent: [
    { key: 'home', label: 'Homes' },
    { key: 'apartment', label: 'Apartments' },
  ],
  buy: [
    { key: 'home', label: 'Homes' },
    { key: 'apartment', label: 'Apartments' },
  ],
};

export default function LandingHero() {
  const [activeTab, setActiveTab] = useState<Tab>('commercial');
  const [propertyType, setPropertyType] =
    useState<PropertyType>('office');

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-kg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/45 backdrop-brightness-75" />

      <div className="relative z-10 w-full max-w-6xl px-6 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl mb-10">
          The #1 site real estate
          <br />
          professionals trust
        </h1>

        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="relative text-lg font-medium text-white/80 hover:text-white transition"
            >
              {tab.label}

              {activeTab === tab.key && (
                <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-white rounded-full transition-all" />
              )}
            </button>
          ))}
        </div>

        {/* Sub-search options */}
        {activeTab !== 'sell' && (
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {subOptions[activeTab].map((option) => (
              <button
                key={option.key}
                onClick={() => setPropertyType(option.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  propertyType === option.key
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Search */}
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
            <input
              type="text"
              placeholder={
                activeTab === 'sell'
                  ? 'Enter your property address'
                  : `Search ${propertyType} by City, Area, Zip`
              }
              className="flex-1 px-6 py-4 text-gray-700 text-lg outline-none"
            />

            <button className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition">
              <Search size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
