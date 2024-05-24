import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Tus Heroes
            </Link>
          </div>
          <div>
            <div className="flex items-center">
              <Link to="/dc" className="text-gray-300 hover:text-white mx-4">
                DC
              </Link>
              <Link to="/marvel" className="text-gray-300 hover:text-white mx-4">
                Marvel
              </Link>
              <Link to="/search" className="text-gray-300 hover:text-white mx-4">
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;