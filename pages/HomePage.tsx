
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { SAMPLE_PRODUCTS, SUBSCRIPTION_PLANS, PLAY_STORE_URL, APP_STORE_URL, APP_ROUTES } from '../constants';
import { PlayStoreIcon, AppleStoreIcon, SearchIcon, ArrowRightIcon } from '../components/IconComponents';

export const HomePage: React.FC = () => {
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 6);
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white";
  const buttonFocusStyle = `${focusRingStyle} rounded-lg`;
  const linkFocusStyle = `${focusRingStyle} rounded-md`;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 rounded-xl overflow-hidden bg-gradient-to-br from-white via-sky-100 to-slate-50 shadow-xl border border-slate-200">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/futurecity/1200/800')] bg-cover bg-center" aria-hidden="true"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 leading-tight">
            Discover the Future <br /> of Local Trading
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Securely buy, sell, and connect with your community using advanced verification and a modern marketplace experience.
          </p>
          <form className="relative max-w-2xl mx-auto mb-10" onSubmit={(e) => {e.preventDefault(); alert('Search submitted (conceptual)!')}}>
            <label htmlFor="hero-search" className="sr-only">Search for products or services</label>
            <input
              type="search"
              id="hero-search"
              placeholder="Search for anything... (e.g., Mountain Bike, Web Services)"
              className={`w-full p-4 pr-16 rounded-lg text-lg bg-white text-slate-800 border-2 border-sky-500 focus:border-sky-500 outline-none placeholder-slate-400 ${linkFocusStyle}`}
              aria-label="Search for products or services on Certified Marketplace"
            />
            <button 
              type="submit" 
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-sky-600 hover:bg-sky-500 rounded-md transition-colors ${linkFocusStyle}`}
              aria-label="Submit search query"
            >
              <SearchIcon className="w-6 h-6 text-white" />
            </button>
          </form>
          <Link
            to={APP_ROUTES.BROWSE_ALL}
            className={`inline-flex items-center text-lg bg-sky-500 text-white font-bold py-4 px-10 shadow-lg hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 ${buttonFocusStyle}`}
          >
            Explore Listings <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section aria-labelledby="featured-listings-title">
        <h2 id="featured-listings-title" className="text-4xl font-bold text-center mb-12 text-sky-600">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to={APP_ROUTES.BROWSE_ALL} className={`text-lg text-sky-600 hover:text-sky-500 font-semibold inline-flex items-center group ${linkFocusStyle} p-1`}>
            View All Products <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
      
      {/* Subscription Call to Action Section */}
      <section className="text-center py-12 bg-sky-50 rounded-xl shadow-lg border border-sky-200" aria-labelledby="cta-subscribe-home">
        <h3 id="cta-subscribe-home" className="text-3xl font-bold text-sky-600 mb-4">Maximize Your Marketplace Potential!</h3>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Unlock premium features, boost your listing visibility, and gain an edge with a Certified Marketplace subscription.
        </p>
        <Link 
            to={APP_ROUTES.SUBSCRIPTIONS} 
            className={`inline-flex items-center text-lg bg-sky-600 text-white font-bold py-3 px-8 shadow-md hover:bg-sky-500 transition-all duration-300 ${buttonFocusStyle}`}
        >
            Explore Subscription Benefits <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
        </Link>
      </section>


      {/* Subscription Plans Section */}
      <section className="py-16 bg-slate-50 rounded-xl shadow-xl border border-slate-200" aria-labelledby="subscription-plans-title">
        <h2 id="subscription-plans-title" className="text-4xl font-bold text-center mb-12 text-sky-600">Unlock Premium Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
          {SUBSCRIPTION_PLANS.map(plan => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="text-center py-16" aria-labelledby="app-download-title">
        <h2 id="app-download-title" className="text-4xl font-bold mb-6 text-sky-600">Experience Certified Marketplace on the Go</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Download our mobile app for enhanced security features like facial recognition login and camera-only uploads.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center bg-slate-700 text-white py-4 px-8 hover:bg-slate-600 transition-colors duration-300 text-lg font-medium shadow-md border-2 border-transparent hover:border-sky-500 ${buttonFocusStyle}`}
          >
            <PlayStoreIcon className="w-8 h-8 mr-3 text-sky-400" aria-hidden="true" />
            Get it on Google Play
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center bg-slate-700 text-white py-4 px-8 hover:bg-slate-600 transition-colors duration-300 text-lg font-medium shadow-md border-2 border-transparent hover:border-sky-500 ${buttonFocusStyle}`}
          >
            <AppleStoreIcon className="w-8 h-8 mr-3 text-sky-400" aria-hidden="true" />
            Download on the App Store
          </a>
        </div>
      </section>
    </div>
  );
};
