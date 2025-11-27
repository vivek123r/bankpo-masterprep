import React from 'react';
import { SECTIONS } from '../constants';
import * as Icons from 'lucide-react';
import { Section } from '../types';

interface SidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelectSection, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-50 h-full w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
          <Icons.GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">MasterPrep</h1>
        </div>

        <nav className="p-4 h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="space-y-1">
            {SECTIONS.map((section: Section) => {
              const IconComponent = (Icons as any)[section.icon || 'BookOpen'];
              
              return (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      onSelectSection(section.id);
                      if (window.innerWidth < 768) onClose();
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${activeSection === section.id 
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                    `}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span className="truncate">{section.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;