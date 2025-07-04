
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../constants';

export const CommunityItemsPage: React.FC = () => {
  const communityItems = SAMPLE_PRODUCTS.filter(p => p.category === 'Home & Garden' || p.category === 'Fashion' || p.category === 'Sports & Leisure' || p.category === 'Baby & Kids').slice(0,6);
  
  return (
    <div className="space-y-12 p-4 md:p-8 bg-white rounded-xl shadow-xl border border-slate-200">
      <h1 className="text-4xl font-bold text-center text-sky-600">Community Hub & General Items</h1>
      <p className="text-lg text-slate-600 mt-4 text-center max-w-xl mx-auto">Connect with your local community, find unique items, share events, and more. This is your space to engage and trade locally.</p>

      <section aria-labelledby="latest-items-title">
        <h2 id="latest-items-title" className="text-3xl font-semibold text-sky-500 mb-6">Latest Items from the Community</h2>
        {communityItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-center py-6">No general items listed yet. Be the first to post!</p>
        )}
      </section>

      <section aria-labelledby="community-announcements-title">
        <h2 id="community-announcements-title" className="text-3xl font-semibold text-sky-500 mb-6">Community Announcements & Events</h2>
        <div className="space-y-4">
          <article className="p-6 bg-slate-50 rounded-lg border border-slate-200" aria-labelledby="announcement-watch-meeting">
            <h3 id="announcement-watch-meeting" className="text-xl font-medium text-sky-600">Neighborhood Watch Meeting</h3>
            <p className="text-slate-500 text-sm">Date: Next Tuesday, 7 PM | Location: Community Hall</p>
            <p className="text-slate-600 mt-2">Join us to discuss local safety initiatives and meet your neighbors.</p>
          </article>
          <article className="p-6 bg-slate-50 rounded-lg border border-slate-200" aria-labelledby="announcement-market-day">
            <h3 id="announcement-market-day" className="text-xl font-medium text-sky-600">Local Market Day - Funday Launch Soon!</h3>
            <p className="text-slate-500 text-sm">Date: Coming Soon! | Location: Central Park</p>
            <p className="text-slate-600 mt-2">Stay tuned for the Certified Marketplace Funday Launch! Stalls, food, music, and fun for the whole family. Details to be announced.</p>
          </article>
        </div>
      </section>
    </div>
  );
};
