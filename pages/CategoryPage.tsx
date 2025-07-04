
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { SAMPLE_PRODUCTS, CATEGORIES_DATA, APP_ROUTES } from '../constants';
import { ArrowRightIcon } from '../components/IconComponents';

export const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";

  const currentCategory = CATEGORIES_DATA.find(cat => cat.path === `/category/${categoryName}`);
  
  const productsInCategory = SAMPLE_PRODUCTS.filter(product => 
    currentCategory && product.category.toLowerCase().replace(/\s+/g, '-') === categoryName?.toLowerCase()
  );
  
  const productsMatchingCategoryName = SAMPLE_PRODUCTS.filter(product => 
    currentCategory && product.category.toLowerCase() === currentCategory.name.toLowerCase()
  );
  
  const finalProducts = productsInCategory.length > 0 ? productsInCategory : productsMatchingCategoryName;


  if (!currentCategory) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-600">Category Not Found</h1>
        <p className="text-slate-600 mt-4">The category you're looking for doesn't exist.</p>
        <Link 
            to={APP_ROUTES.HOME} 
            className={`mt-6 inline-block bg-sky-600 text-white font-semibold py-2 px-4 rounded hover:bg-sky-500 ${focusRingStyle}`}
        >
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-slate-50 rounded-xl shadow-xl border border-slate-200" aria-labelledby="category-page-title">
        <h1 id="category-page-title" className="text-4xl md:text-5xl font-extrabold text-sky-600">{currentCategory.name}</h1>
        {currentCategory.description && <p className="text-lg text-slate-600 mt-4 max-w-xl mx-auto">{currentCategory.description}</p>}
      </section>
      
      {finalProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-live="polite">
          {finalProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-slate-100 rounded-lg shadow p-8 border border-slate-200" aria-live="polite">
          <p className="text-xl text-slate-500 mb-4">No products found in the <span className="font-semibold text-sky-600">{currentCategory.name}</span> category yet. Check back soon!</p>
          <p className="text-slate-600 mb-6">Want to be the first to list here with premium visibility or find exclusive deals?</p>
           <Link 
                to={APP_ROUTES.SUBSCRIPTIONS} 
                className={`inline-flex items-center text-lg bg-sky-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-sky-500 transition-colors duration-300 ${focusRingStyle}`}
            >
                Explore Subscription Plans <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
        </div>
      )}

      {finalProducts.length > 0 && (
         <section className="mt-12 p-8 bg-sky-50 rounded-xl shadow-lg border border-sky-200 text-center" aria-labelledby="category-subscribe-cta">
          <h3 id="category-subscribe-cta" className="text-2xl font-semibold text-sky-700 mb-3">Stand Out in {currentCategory.name}!</h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">Get your listings noticed in this category and more with a premium subscription. Unlock exclusive benefits today.</p>
          <Link 
            to={APP_ROUTES.SUBSCRIPTIONS} 
            className={`inline-flex items-center bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-colors duration-300 shadow-md ${focusRingStyle}`}
          >
            Discover Premium Plans
          </Link>
        </section>
      )}

      <div className="text-center mt-12">
        <Link to={APP_ROUTES.CATEGORIES_LIST} className={`text-lg text-sky-600 hover:text-sky-500 font-semibold inline-flex items-center group p-1 ${focusRingStyle}`}>
          View All Categories <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
