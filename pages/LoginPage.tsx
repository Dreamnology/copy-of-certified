
import React from 'react';
import { FaceScanIcon, LoginIcon } from '../components/IconComponents';

export const LoginPage: React.FC = () => {
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white";
  const buttonFocusStyle = `${focusRingStyle} rounded-lg`;

  const handleMobileLogin = () => {
    alert("Conceptual: This would initiate login via the Certified Marketplace mobile app using facial recognition.");
  };

  const handleTraditionalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Traditional login is disabled. Please use the mobile app.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 md:p-8 bg-slate-50"> {/* Light background for the page */}
      <div className="w-full max-w-md p-8 md:p-12 bg-white rounded-xl shadow-2xl border-2 border-slate-200 text-center">
        <h1 className="text-4xl font-bold mb-8 text-sky-600">Secure Login</h1>
        <p className="text-slate-600 mb-10 text-lg">
          For enhanced security, Certified Marketplace uses facial recognition login via our dedicated mobile app.
        </p>
        
        <button
          onClick={handleMobileLogin}
          type="button"
          className={`w-full inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-6 text-xl transition-colors duration-300 mb-6 ${buttonFocusStyle}`}
        >
          <FaceScanIcon className="w-7 h-7 mr-3" aria-hidden="true" />
          Log In with Mobile App
        </button>

        <div className="my-6 flex items-center" aria-hidden="true">
          <hr className="flex-grow border-slate-300" />
          <span className="px-4 text-slate-400">OR</span>
          <hr className="flex-grow border-slate-300" />
        </div>
        
        <form className="space-y-6" onSubmit={handleTraditionalSubmit}>
          <div>
            <label htmlFor="email" className="block text-left text-lg font-medium text-sky-600 mb-2">Email (Traditional - Placeholder)</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              disabled 
              className="w-full p-3 rounded-md bg-slate-100 text-slate-400 border border-slate-300 outline-none placeholder-slate-400 cursor-not-allowed" 
              placeholder="user@example.com (Use Mobile App)" 
              aria-label="Email (disabled, use mobile app)"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-lg font-medium text-sky-600 mb-2">Password (Traditional - Placeholder)</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              disabled 
              className="w-full p-3 rounded-md bg-slate-100 text-slate-400 border border-slate-300 outline-none placeholder-slate-400 cursor-not-allowed" 
              placeholder="•••••••• (Use Mobile App)" 
              aria-label="Password (disabled, use mobile app)"
            />
          </div>
          <button 
            type="submit" 
            disabled
            className={`w-full bg-slate-300 text-slate-500 font-bold py-3 px-6 text-lg cursor-not-allowed ${buttonFocusStyle}`}
            aria-label="Traditional Login Button (Disabled)"
          >
             <LoginIcon className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
            Login (Disabled - Use App)
          </button>
        </form>
        <p className="mt-8 text-sm text-slate-500">
          Don't have the app yet? <a href="#app-download-section-on-homepage" className={`text-sky-500 hover:text-sky-400 underline ${focusRingStyle} rounded-sm`}>Download it now</a> to get started.
        </p>
      </div>
    </div>
  );
};
