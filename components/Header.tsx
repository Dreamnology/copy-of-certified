
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APP_NAME, NAVIGATION_ITEMS, APP_ROUTES } from '../constants';
import { MenuIcon, CloseIcon, LoginIcon } from './IconComponents';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = "text-sky-600 font-semibold";
  const inactiveLinkStyle = "text-slate-600 hover:text-sky-600 transition-colors duration-300";
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";


  return (
    <header className="bg-white text-slate-700 shadow-lg sticky top-0 z-50 border-b-2 border-slate-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to={APP_ROUTES.HOME} 
          className={`text-3xl font-bold tracking-tight text-sky-600 hover:text-sky-500 transition-colors ${focusRingStyle}`}
        >
          {APP_NAME}
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-lg px-1 py-1 ${focusRingStyle}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link 
            to={APP_ROUTES.LOGIN} 
            className={`flex items-center px-4 py-2 border-2 border-sky-500 rounded-md text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 ${inactiveLinkStyle} ${focusRingStyle}`}
          >
            <LoginIcon className="w-5 h-5 mr-2" />
            Login
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-sky-600 ${focusRingStyle}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-slate-50 border-t border-slate-200">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-lg px-1 py-1 ${focusRingStyle}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link 
              to={APP_ROUTES.LOGIN} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-6 py-3 border-2 border-sky-500 rounded-md text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 ${inactiveLinkStyle} ${focusRingStyle} text-lg`}
            >
              <LoginIcon className="w-5 h-5 mr-2" />
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
