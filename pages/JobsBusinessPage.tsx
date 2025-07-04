
import React from 'react';

export const JobsBusinessPage: React.FC = () => {
  const pageAccentColor = "text-sky-600"; 
  const sectionTitleColor = "text-sky-500";
  const buttonBgColor = "bg-sky-600 hover:bg-sky-500"; // This can stay for primary buttons
  const itemTitleColor = "text-sky-700"; // Darker sky for titles on light bg
  const itemBgColor = "bg-slate-50 border border-slate-200"; // Light background for items

  return (
    <div className="space-y-12 p-4 md:p-8 bg-white rounded-xl shadow-xl border border-slate-200">
      <h1 className={`text-4xl font-bold text-center ${pageAccentColor}`}>Jobs & Business Opportunities</h1>
      <p className="text-lg text-slate-600 mt-4 text-center max-w-xl mx-auto">Find your next career move, offer your professional services, or discover business-to-business connections in a secure environment.</p>

      <section aria-labelledby="available-jobs-title">
        <h2 id="available-jobs-title" className={`text-3xl font-semibold ${sectionTitleColor} mb-6`}>Available Job Listings</h2>
        <div className="space-y-4">
          <article className={`p-6 ${itemBgColor} rounded-lg`} aria-labelledby="job-ai-content-creator">
            <h3 id="job-ai-content-creator" className={`text-xl font-medium ${itemTitleColor}`}>AI Content Creator (Remote)</h3>
            <p className="text-slate-500 text-sm">Company: FutureTech Solutions | Type: Full-time</p>
            <p className="text-slate-600 mt-2">Seeking creative individuals passionate about AI and content. Join our innovative team!</p>
          </article>
          <article className={`p-6 ${itemBgColor} rounded-lg`} aria-labelledby="job-mobile-app-dev">
            <h3 id="job-mobile-app-dev" className={`text-xl font-medium ${itemTitleColor}`}>Mobile App Developer (Flutter/React Native)</h3>
            <p className="text-slate-500 text-sm">Company: SecureApp Builders | Type: Contract</p>
            <p className="text-slate-600 mt-2">Experienced mobile developer needed for exciting projects focusing on security and user experience.</p>
          </article>
        </div>
        <div className="text-center mt-6">
          <button className={`${buttonBgColor} text-white font-semibold py-2 px-6 rounded-md transition-colors`}>Browse More Jobs (Coming Soon)</button>
        </div>
      </section>

      <section aria-labelledby="b2b-services-title">
        <h2 id="b2b-services-title" className={`text-3xl font-semibold ${sectionTitleColor} mb-6`}>Business-to-Business (B2B) Services</h2>
        <div className="space-y-4">
          <article className={`p-6 ${itemBgColor} rounded-lg`} aria-labelledby="b2b-cloud-hosting">
            <h3 id="b2b-cloud-hosting" className={`text-xl font-medium ${itemTitleColor}`}>Secure Cloud Hosting Solutions</h3>
            <p className="text-slate-500 text-sm">Provider: CloudFortress Inc.</p>
            <p className="text-slate-600 mt-2">Reliable and secure hosting for your business applications and data.</p>
          </article>
           <article className={`p-6 ${itemBgColor} rounded-lg`} aria-labelledby="b2b-ai-marketing">
            <h3 id="b2b-ai-marketing" className={`text-xl font-medium ${itemTitleColor}`}>AI-Powered Marketing Automation</h3>
            <p className="text-slate-500 text-sm">Provider: MarketAI Pro</p>
            <p className="text-slate-600 mt-2">Streamline your marketing efforts and reach your target audience effectively.</p>
          </article>
        </div>
         <div className="text-center mt-6">
          <button className={`${buttonBgColor} text-white font-semibold py-2 px-6 rounded-md transition-colors`}>Explore B2B Services (Coming Soon)</button>
        </div>
      </section>
    </div>
  );
};
