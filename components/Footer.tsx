import React, { useState } from 'react';
import { Infinity, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, COMPANY_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Infinity className="h-6 w-6 text-brand-primary" />
              <span className="ml-2 text-xl font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build premium digital experiences for businesses worldwide. From SEO to AI-powered web apps, we are your global digital partners.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={`#${item.path}`} className="text-gray-400 hover:text-brand-primary text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Web Design</li>
              <li className="text-gray-400 text-sm">SEO Optimization</li>
              <li className="text-gray-400 text-sm">Digital Marketing</li>
              <li className="text-gray-400 text-sm">AI Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">WhatsApp: {COMPANY_PHONE}</p>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;