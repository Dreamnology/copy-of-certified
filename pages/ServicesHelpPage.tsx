
import React from 'react';

export const ServicesHelpPage: React.FC = () => {
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";

  return (
    <div className="space-y-8 p-4 md:p-8 bg-white rounded-xl shadow-xl border border-slate-200">
      <h1 className="text-4xl font-bold text-center text-sky-600">Services & Help Center</h1>
      
      <section aria-labelledby="find-local-services-title">
        <h2 id="find-local-services-title" className="text-3xl font-semibold text-sky-500 mb-4">Find Local Services</h2>
        <p className="text-slate-600 mb-6">
          Browse listings for a wide range of professional services offered by members of your community. From home repairs to tutoring, find the help you need right here.
        </p>
        {/* Placeholder for service listings or search */}
        <div className="p-6 bg-slate-100 rounded-lg text-center border border-slate-200">
          <p className="text-slate-500">Service listings functionality coming soon. Explore other categories for now!</p>
        </div>
      </section>

      <section aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-3xl font-semibold text-sky-500 mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6">
          {[
            { q: "How do I post an ad?", a: "To post an ad, navigate to the 'Post Ad' section from the main menu. You'll be guided through the process of adding details, images (via our secure mobile app for verified listings), and setting your price." },
            { q: "Is Certified Marketplace secure?", a: "Security is our top priority. We utilize advanced verification methods, including conceptual facial recognition login and camera-only uploads via our mobile app, to foster a trustworthy environment." },
            { q: "How do subscriptions work?", a: "We offer tiered subscription plans that provide enhanced features like better listing visibility and 'buying boosts'. You can find more details on our 'Subscriptions' page." },
            { q: "How can I contact a seller?", a: "You can contact sellers directly through the messaging system on our platform (coming soon) or via WhatsApp if they provide their number on the listing." },
            { q: "What if I have an issue with a purchase?", a: "We recommend contacting the seller first to resolve any issues. Certified Marketplace may offer dispute resolution assistance as per our Buyer Protection Policy (details coming soon)." },
          ].map((faq, index) => (
            <details key={index} className={`p-4 bg-slate-50 rounded-lg group border border-slate-200 ${focusRingStyle}`}>
              <summary className={`text-xl font-medium text-sky-600 mb-2 cursor-pointer list-none group-open:mb-2 marker:content-[''] group-focus-within:ring-0 group-focus-within:outline-none p-1 rounded-md`}>
                <span className="group-open:hidden" aria-hidden="true">+ </span>
                <span className="hidden group-open:inline" aria-hidden="true">- </span>
                <span className="ml-1">{faq.q}</span>
              </summary>
              <div className="text-slate-600 pl-6 pb-2 pt-1"> {/* Added div for better padding control of content */}
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="need-more-help-title">
        <h2 id="need-more-help-title" className="text-3xl font-semibold text-sky-500 mb-4">Need More Help?</h2>
        <p className="text-slate-600">
          If you can't find the answer to your question here, please don't hesitate to contact our support team through our [Contact Page Placeholder] or email us at support@certifiedmarketplace.example.com.
        </p>
      </section>
    </div>
  );
};
