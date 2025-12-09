import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
           <h1 className="text-4xl font-extrabold text-white mb-6">About Vebora</h1>
           <p className="text-lg text-gray-300 mb-6 leading-relaxed">
             Vebora is a premier digital agency, dedicated to empowering businesses worldwide with cutting-edge digital solutions. 
             We don't just build websites; we build digital experiences that convert visitors into loyal customers.
           </p>
           <p className="text-lg text-gray-300 leading-relaxed">
             Our team consists of expert developers, creative designers, and SEO strategists who are passionate about technology. 
             Whether you are a startup looking for your first website or an established brand seeking a digital overhaul, we are here to help.
           </p>
        </div>
        <div className="relative">
             <div className="absolute -inset-4 bg-brand-primary/20 rounded-xl blur-lg"></div>
             <img 
               src="https://picsum.photos/800/600?grayscale" 
               alt="Team working" 
               className="relative rounded-xl shadow-2xl border border-white/10"
             />
        </div>
      </div>
    </div>
  );
};

export default About;