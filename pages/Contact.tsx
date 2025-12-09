import React, { useState } from 'react';
import { COMPANY_PHONE } from '../constants';
import { Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cleanPhone = COMPANY_PHONE.replace(/\D/g, '');

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // In a real app, send to backend. Here, we'll redirect to WhatsApp with the message.
     const text = `Hi Vebora, my name is ${formData.name}. ${formData.message}`;
     const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
     window.open(url, '_blank');
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h1>
            <p className="text-gray-400">Ready to start your project? Contact us today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-brand-primary mt-1" />
                            <div className="ml-4">
                                <p className="text-white font-medium">WhatsApp / Phone</p>
                                <p className="text-gray-400">{COMPANY_PHONE}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-gray-400 text-sm mb-4">
                            Connect with us directly on WhatsApp for the fastest response.
                        </p>
                        <a 
                           href={`https://wa.me/${cleanPhone}`}
                           target="_blank"
                           rel="noreferrer"
                           className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                          placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                          placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea 
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                          placeholder="Tell us about your project..."
                        ></textarea>
                    </div>
                    <button 
                       type="submit"
                       className="w-full bg-brand-primary hover:bg-pink-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>

        </div>
    </div>
  );
};

export default Contact;