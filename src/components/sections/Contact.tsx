// components/sections/Contact.tsx

import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { Mail, Send } from 'lucide-react';

interface ContactProps {
  personalInfo: {
    email: string;
    location: string;
  };
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend API or email service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact" icon={<Mail className="w-8 h-8" />} />

        {/* Open for Opportunities */}
        <div className="mb-8">
          <p className="text-gray-400 text-lg">
            Open for opportunities: <span className="text-white font-semibold">Yes</span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1d23] rounded-3xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full px-6 py-4 bg-[#23272f] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-6 py-4 bg-[#23272f] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="w-full px-6 py-4 bg-[#23272f] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg shadow-blue-500/50"
              >
                <Send className="w-5 h-5" />
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1d23] rounded-2xl p-6 border border-gray-800">
            <h4 className="text-white font-semibold mb-2">Email</h4>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
          
          <div className="bg-[#1a1d23] rounded-2xl p-6 border border-gray-800">
            <h4 className="text-white font-semibold mb-2">Location</h4>
            <p className="text-gray-400">{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;