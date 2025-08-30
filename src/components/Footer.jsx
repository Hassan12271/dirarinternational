import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    
  return (
    <footer className="bg-white text-black py-1">
      <div className="container mx-auto text-center">
        <p className="font-[500]">&copy; {currentYear - 2} Dirar International. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
