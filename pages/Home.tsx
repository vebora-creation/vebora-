import React from 'react';
import { Link } from '../components/Navbar';
import { ArrowRight, CheckCircle, Star, Zap, Code, BarChart } from 'lucide-react';
import { SERVICES, PACKAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden">
      
      {/* Animated Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Moving Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-image-gradient"></div>
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-brand-dark/40 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020617_100%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            <span className="text-sm font-medium text-brand-primary">New: AI-Powered Web Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary animate-pulse-slow">
              Masterpieces
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 animate-fade-in-up [animation-delay:400ms]">
            We build high-performance websites, optimize for SEO, and integrate AI to help your business dominate your industry globally.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up [animation-delay:600ms]">
            <Link 
              to="/pricing" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-dark bg-brand-primary rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Contact Sales
            </Link>
          </div>

        </div>
      </section>

      {/* Stats Section - Glass Strip */}
      <section className="relative py-10 z-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             { label: "Projects Completed", value: "150+" },
             { label: "Client Satisfaction", value: "99%" },
             { label: "Support Available", value: "24/7" },
             { label: "Years Experience", value: "5+" }
           ].map((stat, idx) => (
             <div key={idx}>
               <h3 className="text-3xl font-bold text-brand-primary mb-1">{stat.value}</h3>
               <p className="text-gray-400 text-sm">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm">What We Do</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Our Expertise</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Full-stack digital solutions tailored for global growth.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES.slice(0, 3).map((service, idx) => (
                    <div key={service.id} className="group relative bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
                                <service.icon className="h-7 w-7 text-brand-dark" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                                {service.description}
                            </p>
                            <Link to="/services" className="inline-flex items-center text-white font-medium text-sm hover:text-brand-primary transition-colors">
                                Explore <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="relative py-24 z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12">
               <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pricing Plans</h2>
                  <p className="text-gray-400">Simple, transparent pricing for your business.</p>
               </div>
               <Link to="/pricing" className="hidden md:flex items-center text-white hover:text-brand-primary transition-colors font-medium">
                  View all packages <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PACKAGES.map((pkg) => (
                    <div key={pkg.name} className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                        pkg.recommended 
                        ? 'bg-slate-800/80 backdrop-blur-xl border-brand-primary shadow-2xl shadow-brand-primary/10 md:-mt-8 md:mb-8' 
                        : 'bg-slate-900/40 backdrop-blur-md border-white/10 hover:border-white/20'
                    }`}>
                        {pkg.recommended && (
                            <div className="absolute top-0 right-0 bg-brand-primary text-brand-dark text-xs font-bold uppercase px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                                Popular
                            </div>
                        )}
                        <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-extrabold text-white mb-6">{pkg.price}</div>
                        <ul className="space-y-4 mb-8">
                            {pkg.features.slice(0, 5).map((feat, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm">
                                    <CheckCircle className={`h-4 w-4 mr-3 shrink-0 mt-0.5 ${pkg.recommended ? 'text-brand-primary' : 'text-gray-500'}`} />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <Link 
                           to="/pricing" 
                           className={`block w-full py-3 rounded-xl font-bold text-center transition-all ${
                               pkg.recommended 
                               ? 'bg-brand-primary text-brand-dark hover:bg-teal-500 shadow-lg shadow-brand-primary/25' 
                               : 'bg-white/5 text-white hover:bg-white/10'
                           }`}
                        >
                            Choose Plan
                        </Link>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <Link to="/pricing" className="text-brand-primary font-medium">View all packages &rarr;</Link>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-5xl mx-auto px-4">
           <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-white/10">
              {/* Background gradient for CTA */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 backdrop-blur-xl"></div>
              
              <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
                  <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                      Join hundreds of satisfied clients worldwide who have elevated their brand with Vebora.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-brand-dark bg-brand-primary rounded-full hover:bg-teal-500 transition-colors shadow-xl"
                  >
                    Start Your Project
                  </Link>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;