// App.tsx

import React, { useState } from 'react';
import BackgroundShapes from './components/BackgroundShapes';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blogs';
import Contact from './components/sections/Contact';
import {
  personalInfo,
  experiences,
  education,
  certifications,
  projects,
  blogPosts,
} from './data/portfolioData';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About personalInfo={personalInfo} />;
      case 'resume':
        return (
          <Resume
            experiences={experiences}
            education={education}
            certifications={certifications}
          />
        );
      case 'portfolio':
        return <Portfolio projects={projects} />;
      case 'blog':
        return <Blog posts={blogPosts} />;
      case 'contact':
        return <Contact personalInfo={personalInfo} />;
      default:
        return <About personalInfo={personalInfo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white flex justify-center">
      <BackgroundShapes />

      <div className="w-full max-w-[1920px] flex relative">
        <div className="w-64 flex-shrink-0">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        <div className="flex-1 relative z-10 min-h-screen">
          <Header 
            personalInfo={personalInfo} 
            showFullHeader={activeSection === 'about' || activeSection === 'portfolio'}
          />

          <main>{renderSection()}</main>
        </div>
      </div>
    </div>
  );
};

export default App;