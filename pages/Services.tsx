import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from '../components/Navbar';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`group bg-slate-900 border border-white/10 p-8 rounded-2xl hover:border-brand-primary transition-all duration-700 hover:shadow-lg hover:shadow-brand-primary/10
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
        <service.icon className="h-8 w-8 text-brand-primary group-hover:text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {service.description}
      </p>
      <Link to="/contact" className="inline-flex items-center text-brand-secondary font-semibold hover:text-white transition-colors">
        Request this service <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-up">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          From pixel-perfect design to intelligent AI integrations, we offer a full spectrum of digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* AI Special Section */}
      <div className="mt-24 bg-gradient-to-r from-blue-900/40 to-slate-900 border border-brand-secondary/30 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">Looking for AI Solutions?</h2>
          <p className="text-gray-300 text-lg">
            We integrate advanced AI models like Gemini to automate customer support, generate content, and analyze data for your business.
          </p>
        </div>
        <div>
           <Link to="/contact" className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
             Discuss AI Projects
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;