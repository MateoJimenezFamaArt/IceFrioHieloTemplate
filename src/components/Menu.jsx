import React, { useState, useEffect } from 'react';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Add or remove the 'is-menu-visible' class from the body
    if (!isMenuOpen) {
      document.body.classList.add('is-menu-visible');
    } else {
      document.body.classList.remove('is-menu-visible');
    }
  };

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27 && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Menu Button */}
      <a 
        href="#menu" 
        className="navPanelToggle" 
        onClick={(e) => { 
          e.preventDefault(); 
          toggleMenu(); 
        }}
      >
        <span className="fa fa-bars"></span>
      </a>
      
      {/* Menu Panel */}
      <nav id="menu">
        <ul className="links">
          <li><a href="index.html">Home</a></li>
          <li><a href="generic.html">Generic</a></li>
          <li><a href="elements.html">Elements</a></li>
        </ul>
        <a 
          className="close" 
          onClick={(e) => { 
            e.preventDefault(); 
            toggleMenu(); 
          }}
        >
          Close
        </a>
      </nav>
    </>
  );
}

export default Menu;