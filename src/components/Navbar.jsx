import React from 'react';

export default function Navbar  () {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg">Krishnaiya</h1>

        <div className="space-x-6 hidden md:block">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-black"
            >
              {item}
            </button>
          ))}
        </div>

       
      </div>
    </nav>
  );
};

