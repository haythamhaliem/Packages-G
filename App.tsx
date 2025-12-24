
import React, { useState } from 'react';
import { PACKAGES_DATA, CONTACT_PHONE } from './constants';
import { ServiceCategory } from './types';
import PackageCard from './components/PackageCard';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(ServiceCategory.COMBO);

  const currentService = PACKAGES_DATA.find(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#faf9f6] antialiased">
      {/* Navigation / Tabs - Now at the very top */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {PACKAGES_DATA.map((item) => (
              <button
                key={item.category}
                onClick={() => setActiveCategory(item.category)}
                className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === item.category
                    ? 'bg-stone-900 text-white shadow-md transform scale-105'
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-stone-300"></div>
            <span className="text-stone-400 text-xs tracking-[0.3em] uppercase font-semibold">Our Packages</span>
            <div className="h-px w-8 bg-stone-300"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 serif italic">
            {activeCategory}
          </h1>
          {currentService?.note && (
            <p className="text-stone-500 italic font-medium text-sm md:text-base bg-stone-100 inline-block px-4 py-1 rounded-full">
              {currentService.note}
            </p>
          )}
        </div>

        {/* Dynamic Package Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {currentService?.packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 p-8 md:p-12 bg-white border border-stone-100 rounded-[2rem] shadow-sm text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-2 serif">Ready to book your date?</h3>
          <p className="text-stone-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            احجز موعدك الآن لضمان توفر الخدمة في يومك المميز. جميع الباقات قابلة للتعديل حسب الطلب.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/${CONTACT_PHONE.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a 
              href={`tel:${CONTACT_PHONE}`}
              className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              Call: {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center">
        <p className="text-stone-400 text-[10px] tracking-[0.3em] uppercase">
          Halim Wedding &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
