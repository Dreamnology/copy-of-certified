
import React from 'react';
import { APP_NAME } from '../constants';

export const ContactPage: React.FC = () => {
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-2xl border-2 border-slate-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">Contact {APP_NAME}</h1>
      
      <div className="prose prose-defaultLight prose-lg max-w-none text-slate-700 space-y-6 text-center">
        <p>
          Have questions, feedback, or need support regarding the {APP_NAME} platform? 
          We're here to help!
        </p>
        
        <div>
          <h2 className="text-2xl font-semibold text-sky-500 mb-2">General Inquiries & Support</h2>
          <p className="text-lg">
            For all platform-related questions, please reach out to us via email:
          </p>
          <a 
            href="mailto:Irwingabriel30@gmail.com" 
            className={`block text-xl font-medium text-sky-600 hover:text-sky-500 hover:underline my-3 p-2 ${focusRingStyle}`}
            aria-label={`Email ${APP_NAME} support at Irwingabriel30@gmail.com`}
          >
            Irwingabriel30@gmail.com
          </a>
        </div>

        <p className="mt-6">
          We aim to respond to all inquiries as promptly as possible. 
          Please provide as much detail as you can so we can assist you effectively.
        </p>
        
        <p className="text-sm text-slate-500 pt-4 border-t border-slate-200 mt-8">
          If you have questions about a specific listing or transaction, please first try to contact the seller 
          or buyer directly through the platform's messaging features (once available).
        </p>

      </div>
    </div>
  );
};
