import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './components/About';
import Skill from './components/Skill';

const App = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black text-white min-h-screen">
      <Navbar />
      
      
      <div id="h" className="scroll-mt-10 md:scroll-mt-20">
        <About />
      </div>

      <div id="d" className="scroll-mt-10 md:scroll-mt-14">
        <Project />
      </div>

      <div id="p" className="scroll-mt-10 md:scroll-mt-14">
        <Skill />
      </div>
    </div>
  );
};

export default App;
