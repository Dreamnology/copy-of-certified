
import React from 'react';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { SUBSCRIPTION_PLANS } from '../constants';

export const SubscriptionsPage: React.FC = () => {
  return (
    <div className="space-y-12 p-4 md:p-8 bg-white"> {/* Main page background to white */}
      <section className="text-center py-10 bg-slate-50 rounded-xl shadow-xl border border-slate-200" aria-labelledby="subscriptions-page-title">
        <h1 id="subscriptions-page-title" className="text-4xl md:text-5xl font-extrabold text-sky-600">Our Subscription Plans</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-xl mx-auto">Choose a plan that suits your needs and unlock exclusive benefits on Certified Marketplace. Elevate your trading experience!</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {SUBSCRIPTION_PLANS.map(plan => (
          <SubscriptionCard key={plan.id} plan={plan} />
        ))}
      </div>

      <section className="mt-16 p-8 bg-slate-50 rounded-xl shadow-lg border border-slate-200 text-center" aria-labelledby="why-subscribe-title">
        <h2 id="why-subscribe-title" className="text-3xl font-semibold text-sky-500 mb-4">Why Subscribe?</h2>
        <ul className="text-slate-600 space-y-2 max-w-lg mx-auto list-disc list-inside text-left">
          <li>Gain higher visibility for your listings.</li>
          <li>Access exclusive "buying boost" features to secure deals faster.</li>
          <li>Enjoy more active listings to showcase all your items.</li>
          <li>Potentially view more in-depth details about other users and listings for added trust (feature conceptual).</li>
          <li>Receive priority support for any queries.</li>
        </ul>
        <p className="mt-6 text-slate-500">
          Our subscription model is designed to enhance your experience and provide greater value, all while supporting a secure and thriving community marketplace.
        </p>
      </section>
    </div>
  );
};
