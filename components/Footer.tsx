
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, FOOTER_LINKS } from '../constants';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from './IconComponents';

export const Footer: React.FC = () => {
  const linkFocusStyle = "focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-100 rounded-sm";
  const developerLinkFocusStyle = `hover:text-sky-500 transition-colors ${linkFocusStyle}`;

  return (
    <footer className="bg-slate-100 text-slate-600 py-12 border-t-2 border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-sky-600 mb-4">{APP_NAME}</h3>
            <p className="text-sm text-slate-500">Your secure local trading platform. Connecting communities, one verified transaction at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-sky-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.slice(0, Math.ceil(FOOTER_LINKS.length / 2)).map(link => (
                 <li key={link.label}><Link to={link.path} className={`hover:text-sky-600 transition-colors ${linkFocusStyle}`}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-semibold text-sky-500 mb-4 opacity-0 md:opacity-100">More Links</h3> {/* Hidden on mobile for balance or use for other content */}
             <ul className="space-y-2">
              {FOOTER_LINKS.slice(Math.ceil(FOOTER_LINKS.length / 2)).map(link => (
                 <li key={link.label}><Link to={link.path} className={`hover:text-sky-600 transition-colors ${linkFocusStyle}`}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-300 pt-8">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className={`text-slate-500 hover:text-sky-600 transition-colors ${linkFocusStyle}`}><FacebookIcon className="w-6 h-6" /></a>
            <a href="#" aria-label="Twitter" className={`text-slate-500 hover:text-sky-600 transition-colors ${linkFocusStyle}`}><TwitterIcon className="w-6 h-6" /></a>
            <a href="#" aria-label="Instagram" className={`text-slate-500 hover:text-sky-600 transition-colors ${linkFocusStyle}`}><InstagramIcon className="w-6 h-6" /></a>
            <a href="#" aria-label="LinkedIn" className={`text-slate-500 hover:text-sky-600 transition-colors ${linkFocusStyle}`}><LinkedInIcon className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-300 text-center">
            <p className="text-sm text-slate-500">
                Website developed &amp; powered by: <a href="https://aiexpress360.ai" target="_blank" rel="noopener noreferrer" className={`font-semibold text-sky-600 hover:text-sky-500 underline ${developerLinkFocusStyle}`}>AI Express Digital Marketing</a>
            </p>
            <p className="text-xs text-slate-400 mt-2">
                Contact Developer: <a href="mailto:aiden@aiexpress360.ai" className={developerLinkFocusStyle}>aiden@aiexpress360.ai</a> | <a href="tel:+27612905572" className={developerLinkFocusStyle}>+27 61 290 5572</a>
            </p>
        </div>
      </div>
    </footer>
  );
};
