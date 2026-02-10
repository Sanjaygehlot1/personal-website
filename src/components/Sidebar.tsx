// components/Sidebar.tsx

import React from 'react';
import { User, FileText, Box, BookOpen, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'resume', icon: FileText, label: 'RESUME' },
    { id: 'portfolio', icon: Box, label: 'PORTFOLIO' },
    { id: 'blog', icon: BookOpen, label: 'BLOG' },
    { id: 'contact', icon: Mail, label: 'CONTACT' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1d23] z-50 flex flex-col items-center pt-16 px-6">
      {/* Logo/Brand - Colorful Blocks */}
      <div className="mb-12 flex shadow-lg">
        <div className="w-16 h-10 bg-[#06b6d4]"></div>
        <div className="w-16 h-10 bg-[#3b82f6]"></div>
        <div className="w-20 h-10 bg-[#f97316]"></div>
        <div className="w-16 h-10 bg-[#fbbf24]"></div>
      </div>

      <nav className="flex flex-col space-y-4 w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                flex flex-col items-center justify-center py-6 px-4 rounded-[18px]
                transition-all duration-300 group relative
                ${isActive 
                  ? 'bg-[#2563eb] text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-[#23272f] text-[#9ca3af] hover:bg-[#2a2e38] hover:text-white'
                }
              `}
            >
              <Icon 
                className={`
                  w-7 h-7 mb-2 transition-all duration-300
                  ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                `}
                strokeWidth={2}
              />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;