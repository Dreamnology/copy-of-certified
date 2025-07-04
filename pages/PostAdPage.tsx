
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon } from '../components/IconComponents';
import { POLICY_ROUTES, CATEGORIES_DATA, APP_ROUTES } from '../constants';


export const PostAdPage: React.FC = () => {
  const [agreedToPolicies, setAgreedToPolicies] = useState(false);
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white";
  const inputFocusStyle = `border-slate-300 focus:border-sky-500 ${focusRingStyle} rounded-md`;
  const buttonFocusStyle = `${focusRingStyle} rounded-lg`;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPolicies) {
      alert("Please agree to the policies before posting an ad.");
      return;
    }
    // Handle form submission logic here
    alert("Ad posting functionality is conceptual. Your ad would be submitted now! \n\nWant to make it stand out? Check our subscription plans for premium placement.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-2xl border-2 border-slate-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">Post Your Advertisement</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-sky-600 mb-2">Ad Title</label>
          <input type="text" id="title" name="title" required className={`w-full p-3 bg-slate-50 text-slate-700 placeholder-slate-400 ${inputFocusStyle}`} placeholder="e.g., Quality Mountain Bike" />
        </div>

        <div>
          <label htmlFor="category" className="block text-lg font-medium text-sky-600 mb-2">Category</label>
          <select id="category" name="category" required className={`w-full p-3 bg-slate-50 text-slate-700 ${inputFocusStyle}`}>
            <option value="">Select a category</option>
            {CATEGORIES_DATA.map(cat => (
                <option key={cat.name} value={cat.name.toLowerCase().replace(/\s+/g, '-')}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-sky-600 mb-2">Description</label>
          <textarea id="description" name="description" rows={5} required className={`w-full p-3 bg-slate-50 text-slate-700 placeholder-slate-400 ${inputFocusStyle}`} placeholder="Detailed description of your item or service..."></textarea>
        </div>

        <div>
          <label htmlFor="price" className="block text-lg font-medium text-sky-600 mb-2">Price (ZAR)</label>
          <input type="number" id="price" name="price" inputMode="decimal" min="0" step="any" className={`w-full p-3 bg-slate-50 text-slate-700 placeholder-slate-400 ${inputFocusStyle}`} placeholder="e.g., 500" />
        </div>

        <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-sky-600 mb-2">Image Upload (Mobile App Required)</h3>
          <p className="text-sm text-slate-600 mb-3">
            For enhanced security and listing verification, images must be uploaded directly from your camera using the Certified Marketplace mobile app. This helps prevent fraudulent listings.
          </p>
          <button 
            type="button" 
            className={`inline-flex items-center bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-4 transition-colors ${buttonFocusStyle}`}
            onClick={() => alert("Conceptual: This would link to or open the mobile app for image upload.")}
          >
            <CameraIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Open Mobile App to Upload Images
          </button>
          <p className="text-xs text-slate-500 mt-2">(This button is conceptual and would trigger the mobile app)</p>
        </div>
        
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-md">
            <label htmlFor="policyAgreement" className="flex items-start text-sm text-slate-700">
                <input 
                    type="checkbox" 
                    id="policyAgreement" 
                    checked={agreedToPolicies}
                    onChange={(e) => setAgreedToPolicies(e.target.checked)}
                    className={`h-6 w-6 rounded border-slate-400 text-sky-600 mr-3 mt-0.5 flex-shrink-0 ${focusRingStyle}`}
                    aria-describedby="policy-links"
                    required
                />
                <span id="policy-links" className="leading-relaxed">
                    I have read and agree to the Certified Marketplace&nbsp;
                    <Link to={POLICY_ROUTES.TERMS} target="_blank" rel="noopener noreferrer" className={`text-sky-600 hover:text-sky-500 underline ${focusRingStyle}`}>Terms of Service</Link>,&nbsp;
                    <Link to={POLICY_ROUTES.PRIVACY} target="_blank" rel="noopener noreferrer" className={`text-sky-600 hover:text-sky-500 underline ${focusRingStyle}`}>Privacy Policy</Link>, and all other applicable listing guidelines.
                </span>
            </label>
        </div>


        <button 
          type="submit" 
          className={`w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 text-xl transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${buttonFocusStyle}`}
          disabled={!agreedToPolicies}
        >
          Post Your Ad
        </button>
      </form>

      <div className="mt-12 p-6 bg-slate-100 rounded-xl border-2 border-slate-200 text-center">
        <h3 className="text-2xl font-semibold text-sky-600 mb-3">Want More Views on Your Ad?</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          Upgrade to a subscription plan for premium ad placement, increased visibility, and more features to help you sell faster!
        </p>
        <Link
          to={APP_ROUTES.SUBSCRIPTIONS}
          className={`inline-flex items-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 ${buttonFocusStyle}`}
        >
          Explore Subscription Benefits
        </Link>
      </div>

    </div>
  );
};
