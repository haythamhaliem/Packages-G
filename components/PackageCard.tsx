
import React from 'react';
import { PackageDetails } from '../types';

interface PackageCardProps {
  packageData: PackageDetails;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  return (
    <div className={`group relative flex flex-col md:flex-row bg-white overflow-hidden rounded-3xl border border-stone-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${packageData.isPopular ? 'ring-2 ring-stone-900' : ''}`}>
      {packageData.isPopular && (
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Recommended
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-between order-2 md:order-1">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-stone-300 font-mono text-sm tracking-tighter">0{packageData.id}</span>
            <h3 className="text-3xl font-bold text-stone-900 serif italic">
              {packageData.name}
            </h3>
          </div>
          
          <ul className="space-y-5 mb-10">
            {packageData.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-stone-600 group-hover:text-stone-900 transition-colors">
                <svg className="w-4 h-4 text-stone-300 group-hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium tracking-tight uppercase leading-none">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-8 border-t border-stone-50 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">Starting from</span>
            <div className="text-3xl font-bold text-stone-900 tracking-tighter">
              {packageData.price}
            </div>
          </div>
          <div className="h-12 w-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-[45%] h-72 md:h-auto overflow-hidden order-1 md:order-2 relative">
        <img 
          src={packageData.image} 
          alt={packageData.name} 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
    </div>
  );
};

export default PackageCard;
