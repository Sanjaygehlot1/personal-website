import React from 'react';
import { User, FileText, Codesandbox, BookOpen, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setSection: (section: string) => void;
}

const menuItems = [
  { id: 'about', icon: <User size={32} />, label: 'About' },
  { id: 'resume', icon: <FileText size={32} />, label: 'Resume' },
  { id: 'portfolio', icon: <Codesandbox size={32} />, label: 'Portfolio' },
  { id: 'blog', icon: <BookOpen size={32} />, label: 'Blog' },
  { id: 'contact', icon: <Mail size={32} />, label: 'Contact' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setSection }) => {
  return (
    <div className="bg-[#23262b] top-0 rounded-2xl   p-4">
      <div className="flex flex-col items-center gap-4">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setSection(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`
                w-[90px] h-[90px] rounded-2xl cursor-pointer
                flex flex-col items-center justify-center gap-1
                transition-all duration-300 ease-in-out
                focus:outline-none
                ${isActive
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent text-gray-400  bg-white/5 hover: hover:text-blue-500 hover:-translate-y-[3px]'
                }
              `}
            >
              <span className="mb-1">{item.icon}</span>
              <span className="font-semibold text-[0.75rem] tracking-widest uppercase leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;