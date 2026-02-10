
import React from 'react';
import { Mail, MapPin, Download, Facebook, Twitter, Instagram, Linkedin, Github, Globe } from 'lucide-react';
import type { PersonalInfo } from '../types';

interface HeaderProps {
  personalInfo: PersonalInfo;
  showFullHeader?: boolean;
}

const Header: React.FC<HeaderProps> = ({ personalInfo, showFullHeader = true }) => {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      facebook: Facebook,
      twitter: Twitter,
      instagram: Instagram,
      linkedin: Linkedin,
      github: Github,
      portfolio: Globe,
    };
    return icons[iconName] || Globe;
  };

  if (!showFullHeader) {
    return (
      <header className="bg-[#23272f] border-b border-[#2a2e38] py-3 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <MapPin className="w-4 h-4 text-[#9ca3af]" strokeWidth={2} />
          <span className="text-[#d1d5db] text-sm">{personalInfo.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-[#ec4899] rounded-full animate-pulse"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-[#23272f] relative overflow-hidden border-b border-[#2a2e38]">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 z-0">
        {/* Red large triangle */}
        <div className="w-0 h-0 border-t-[180px] border-t-transparent border-l-[180px] border-l-[#dc2626] border-b-[180px] border-b-transparent opacity-80"></div>
      </div>
      
      <div className="absolute top-0 left-28 flex z-0">
        <div className="w-24 h-14 bg-[#06b6d4]"></div>
        <div className="w-24 h-14 bg-[#3b82f6]"></div>
        <div className="w-28 h-14 bg-[#f97316]"></div>
        <div className="w-24 h-14 bg-[#fbbf24]"></div>
      </div>
      
      <div className="absolute top-0 right-0 z-0">
        <div className="w-0 h-0 border-t-[220px] border-t-transparent border-r-[220px] border-r-[#06b6d4] border-b-[220px] border-b-transparent opacity-70"></div>
      </div>

      <div className="absolute top-16 right-20 z-0">
        <div className="w-0 h-0 border-t-[80px] border-t-transparent border-r-[80px] border-r-[#fbbf24] border-b-[80px] border-b-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 py-10 px-12 flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Profile Section */}
        <div className="flex items-center space-x-10">
          {/* Avatar with decorative background */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-0 h-0 border-t-[120px] border-t-transparent border-l-[120px] border-l-[#f97316] border-b-[120px] border-b-transparent opacity-40"></div>
            <div className="relative bg-[#1a1d23] rounded-[32px] p-2.5 shadow-2xl">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-36 h-36 rounded-[26px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/144?text=Avatar';
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="text-[40px] font-bold text-white mb-2 leading-tight">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-[#d1d5db] font-normal">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-[#9ca3af] text-[17px] mb-5 font-light">{personalInfo.title}</p>
            
            {/* Social Links */}
            <div className="flex space-x-3.5">
              {personalInfo.socialLinks.map((social, index) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6b7280] hover:text-[#06b6d4] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-right space-y-5">
          <div>
            <p className="text-[#6b7280] text-[11px] mb-1.5 uppercase tracking-wider font-semibold">EMAIL</p>
            <a href={`mailto:${personalInfo.email}`} className="text-white text-[15px] hover:text-[#06b6d4] transition-colors flex items-center justify-end space-x-2">
              <span>{personalInfo.email}</span>
              <Mail className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
          
          {personalInfo.cvUrl && (
            <div>
              <p className="text-[#6b7280] text-[11px] mb-1.5 uppercase tracking-wider font-semibold">CV</p>
              <a 
                href={personalInfo.cvUrl} 
                download
                className="text-white text-[15px] hover:text-[#06b6d4] transition-colors flex items-center justify-end space-x-2"
              >
                <span>Download</span>
                <Download className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          )}
          
          <div>
            <p className="text-[#6b7280] text-[11px] mb-1.5 uppercase tracking-wider font-semibold">LOCATION</p>
            <div className="text-white text-[15px] flex items-center justify-end space-x-2">
              <span>{personalInfo.location}</span>
              <MapPin className="w-4 h-4" strokeWidth={2} />
            </div>
          </div>
          
          <div>
            <p className="text-[#6b7280] text-[11px] mb-1.5 uppercase tracking-wider font-semibold">STATUS</p>
            <div className="flex items-center justify-end space-x-2">
              <div className="w-2.5 h-2.5 bg-[#ec4899] rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;