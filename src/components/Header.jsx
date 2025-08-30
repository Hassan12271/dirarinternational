import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-white py-1">
      <div className="container mx-auto">
        <img src={Logo} alt="Logo" className="m-auto h-24" />
      </div>
    </header>
  );
}

export default Header;
