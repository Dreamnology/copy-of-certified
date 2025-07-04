
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { SAMPLE_PRODUCTS, CATEGORIES_DATA, APP_ROUTES } from '../constants';
import { Product } from '../types';
import { ArrowRightIcon } from '../components/IconComponents';

export const BrowseAllPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]); 

  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";
  const inputFocusStyle = `border-slate-300 focus:border-sky-500 ${focusRingStyle}`;


  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.area.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const productPrice = parseInt(product.price.replace('R', ''));
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([priceRange[0], parseInt(e.target.value)]);
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-slate-50 rounded-xl shadow-xl border border-slate-200" aria-labelledby="browse-all-title">
        <h1 id="browse-all-title" className="text-4xl md:text-5xl font-extrabold text-sky-600">Browse All Listings</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-xl mx-auto">Find exactly what you're looking for in our extensive marketplace.</p>
      </section>

      {/* Filters Section */}
      <section className="p-6 bg-slate-50 rounded-lg shadow-md border border-slate-200" aria-labelledby="filter-listings-title">
        <h2 id="filter-listings-title" className="sr-only">Filter Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-sky-600 mb-1">Search</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, seller, area..."
              className={`w-full p-3 bg-white text-slate-700 ${inputFocusStyle}`}
              aria-label="Search listings by keyword"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-sky-600 mb-1">Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full p-3 bg-white text-slate-700 ${inputFocusStyle}`}
              aria-label="Filter by category"
            >
              <option value="All">All Categories</option>
              {CATEGORIES_DATA.map(cat => (
                <option key={cat.name} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="priceMax" className="block text-sm font-medium text-sky-600 mb-1">Max Price: R{priceRange[1]}</label>
            <input
              type="range"
              id="priceMax"
              min="0"
              max="20000"
              step="500"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className={`w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-sky-500 ${focusRingStyle}`}
              aria-label="Set maximum price for listings"
              aria-valuetext={`Maximum price R${priceRange[1]}`}
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section aria-live="polite">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-slate-100 rounded-lg shadow p-8 border border-slate-200">
            <p className="text-xl text-slate-500 mb-4">No products match your current filters. Try adjusting your search!</p>
            <p className="text-slate-600 mb-6">
              Want to ensure your own items get seen or access exclusive buying features?
            </p>
            <Link 
                to={APP_ROUTES.SUBSCRIPTIONS} 
                className={`inline-flex items-center text-lg bg-sky-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-sky-500 transition-colors duration-300 ${focusRingStyle}`}
            >
              Explore Subscription Plans <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>
      
      {filteredProducts.length > 0 && (
        <section className="mt-16 p-8 bg-sky-50 rounded-xl shadow-lg border border-sky-200 text-center" aria-labelledby="browse-subscribe-cta">
          <h3 id="browse-subscribe-cta" className="text-2xl font-semibold text-sky-700 mb-3">Supercharge Your Trading Experience!</h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">Unlock premium features, boost your listings, and get the best deals with a Certified Marketplace subscription.</p>
          <Link 
            to={APP_ROUTES.SUBSCRIPTIONS} 
            className={`inline-flex items-center bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-colors duration-300 shadow-md ${focusRingStyle}`}
          >
            View Subscription Plans
          </Link>
        </section>
      )}
    </div>
  );
};
