import React, { useState } from 'react';

const OffCanvasMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className=" p-4 text-gray-200 bg-stone-700"
      >
        Toggle Menu
      </button>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-0 bg-stone-700 transition-all duration-300 transform ${isMenuOpen ? 'w-2/3 sm:w-1/3' : 'w-0'}`}
      >
        <nav className={`flex flex-col items-center justify-center h-full ${isNavVisible ? '' : 'hidden'}`}>
          <a href="#" className="text-gray-200 p-4 hover:bg-stone-800 hover:text-amber-800">Menu Item 1</a>
          <a href="#" className="text-gray-200 p-4 hover:bg-stone-800 hover:text-amber-800">Menu Item 2</a>
          <a href="#" className="text-gray-200 p-4 hover:bg-stone-800 hover:text-amber-800">Menu Item 3</a>
        </nav>
      </div>
    </div>
  );
};

export default OffCanvasMenu;







// Chat gpt and avi code smz phle