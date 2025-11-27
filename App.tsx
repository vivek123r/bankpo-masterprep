import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import SectionRenderer from './components/SectionRenderer';
import AIChat from './components/AIChat';
import { SECTIONS } from './constants';
import { Menu, Sun, Moon } from 'lucide-react';

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTIONS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeSection = useMemo(() => 
    SECTIONS.find(s => s.id === activeSectionId) || SECTIONS[0], 
    [activeSectionId]
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Construct context for AI
  const currentContext = useMemo(() => {
    return `Title: ${activeSection.title}. \nContent: ${activeSection.content.map(c => 
      c.type === 'TABLE' ? 'Table Data present' : 
      c.type === 'LIST' ? c.items?.join(', ') : c.text
    ).join('\n')}`;
  }, [activeSection]);

  return (
    <div className={`min-h-screen flex bg-slate-50 dark:bg-slate-900 transition-colors duration-200 ${isDarkMode ? 'dark' : ''}`}>
      
      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSectionId} 
        onSelectSection={setActiveSectionId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Navbar for Mobile/Theme */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 hidden md:block">
              Banking PO Study Guide
            </span>
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth p-4 md:p-8 lg:p-12 pb-32">
          <SectionRenderer section={activeSection} />
        </div>

        {/* AI Chat Widget */}
        <AIChat currentContext={currentContext} />
        
      </main>
    </div>
  );
}

export default App;