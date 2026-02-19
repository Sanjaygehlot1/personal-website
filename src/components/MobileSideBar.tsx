import type React from "react";

interface MenuItemsProps {
    id : string;
    label: string;
    icon: React.ReactNode;
}

interface MobileSidebarProps {
  activeSection: string;
  setSection: (section: string) => void;
  menuItems: MenuItemsProps[]
}

export function MobileSidebar({ activeSection, setSection, menuItems }: MobileSidebarProps) {
  return (
    <div className="bg-[#1c1f23]/95 backdrop-blur-md border-b border-white/[0.06] py-2">
      <div className="flex items-center justify-around w-full gap-1">
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
                flex flex-col items-center justify-center gap-1
                px-1 py-2 rounded-xl flex-1
                transition-all duration-300 ease-in-out
                focus:outline-none
                ${isActive
                  ? ' text-blue-500'
                  : 'bg-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              <span>{item.icon}</span>
              <span className="text-[0.6rem] font-semibold tracking-widest uppercase leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}