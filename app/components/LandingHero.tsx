'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

type Tab =
  | 'buy'
  | 'rent'
  | 'sell'
  | 'pre-approval'
  | 'just-sold'
  | 'home-value';

const tabs: { key: Tab; label: string }[] = [
  { key: 'buy', label: 'Buy' },
  { key: 'rent', label: 'Rent' },
  { key: 'sell', label: 'Sell' },
  { key: 'pre-approval', label: 'Pre-approval' },
  
];

export default function LandingHero() {
  const [activeTab, setActiveTab] = useState<Tab>('buy');

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-kg.jpg')" }}
    >
      {/* Dark overlay to reduce brightness & increase text visibility */}
      <div className="absolute inset-0 bg-black/45 backdrop-brightness-75" />

      <div className="relative z-10 w-full max-w-6xl px-6 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl mb-10">
          The #1 site real estate
          <br />
          professionals trust
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative text-lg font-medium transition-colors ${
                activeTab === tab.key
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {tab.label}

              {activeTab === tab.key && (
                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-6 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
            <input
              type="text"
              placeholder="Address, School, City, Zip or Neighborhood"
              className="flex-1 px-6 py-4 text-gray-700 text-lg outline-none rounded-l-full"
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
