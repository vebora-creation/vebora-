import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Info } from 'lucide-react';
import { Link } from '../components/Navbar';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Transparent Pricing</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the package that fits your business needs. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {PACKAGES.map((pkg) => (
          <div 
            key={pkg.name} 
            className={`flex flex-col relative bg-slate-900 rounded-2xl p-8 border ${
              pkg.recommended 
                ? 'border-brand-primary shadow-2xl shadow-brand-primary/20 scale-105 z-10' 
                : 'border-white/10'
            }`}
          >
             {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
             )}
            <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
            </div>
            
            <div className="flex-1">
                <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                ))}
                </ul>
            </div>
            
            <Link 
              to="/contact" 
              className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                pkg.recommended 
                  ? 'bg-brand-primary hover:bg-pink-600 text-white' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              Choose {pkg.name}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ / Info Section */}
      <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-white/5">
        <div className="flex items-start space-x-4">
            <Info className="h-6 w-6 text-brand-secondary shrink-0 mt-1" />
            <div>
                <h3 className="text-xl font-bold text-white mb-2">Need a custom solution?</h3>
                <p className="text-gray-400 mb-4">
                    Our Custom Package is designed for large enterprises or unique requirements (e.g., Hotel booking systems, LMS, complex E-commerce). 
                    Pricing depends on the scope of work.
                </p>
                <Link to="/contact" className="text-brand-secondary hover:text-white font-medium">Contact us for a quote &rarr;</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;