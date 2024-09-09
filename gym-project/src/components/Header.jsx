import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logoImage from '../assets/fit.png'; // Adjust the path to your logo image

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black flex justify-between items-center text-white font-semibold max-w-[1400px] mx-auto h-[70px] px-2 fixed top-0 left-0 w-full z-50">
      <a href="#top" className="flex items-center ml-4">
        <div className="flex items-center">
          <img src={logoImage} alt="Gym Logo" className="h-10" /> {/* Adjust the height as needed */}
          <span className="ml-4 text-xl text-red-600">GYM</span> {/* Adjust the margin and text size as needed */}
        </div>
      </a>
      
      <ul className="hidden md:flex">
        <li className="p-5"><a href="#about">About</a></li>
        <li className="p-5"><a href="#program">Training</a></li>
        <li className="p-5"><a href="#training">Our Teams</a></li>
        <li className="p-5"><a href="#pricing">Pricing</a></li>
      </ul>
      
      <div className="hidden md:flex items-center">
        <Link to="/register" className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Join Us
        </Link>
      </div>
      
      <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#202121] ease-in-out duration-500 z-40' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <div className="p-8">
          <img src={logoImage} alt="Gym Logo" className="h-12 mb-4" /> {/* Adjust the height as needed */}
          <ul className="text-2xl">
            <li className="p-2"><a href="#about" onClick={() => setNav(false)}>About</a></li>
            <li className="p-2"><a href="#program" onClick={() => setNav(false)}>Training</a></li>
            <li className="p-2"><a href="#training" onClick={() => setNav(false)}>Our Teams</a></li>
            <li className="p-2"><a href="#pricing" onClick={() => setNav(false)}>Pricing</a></li>
            <li className="p-2 mt-4">
              <Link to="/register" className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition" onClick={() => setNav(false)}>
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
