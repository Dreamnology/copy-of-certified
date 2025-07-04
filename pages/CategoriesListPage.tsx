
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES_DATA } from '../constants';
import { Category } from '../types';
import { ArrowRightIcon } from '../components/IconComponents';

const CategoryDisplayCard: React.FC<{ category: Category }> = ({ category }) => {
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-lg";

  return (
    <Link 
      to={category.path} 
      className={`block p-6 bg-white rounded-lg shadow-lg border-2 border-slate-200 hover:border-sky-500 hover:shadow-sky-500/10 transform transition-all duration-300 hover:scale-105 group ${focusRingStyle}`}
      aria-label={`Explore category: ${category.name}`}
    >
      <div className="flex items-center mb-3">
        {category.icon && <span className="mr-3 text-sky-600" aria-hidden="true">{category.icon}</span>}
        <h3 className="text-2xl font-semibold text-sky-600 group-hover:text-sky-500">{category.name}</h3>
      </div>
      {category.description && <p className="text-slate-600 text-sm mb-4 group-hover:text-slate-500">{category.description}</p>}
      <span className="inline-flex items-center text-sky-600 group-hover:text-sky-500 font-medium">
        Explore <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
};

export const CategoriesListPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-slate-50 rounded-xl shadow-xl border border-slate-200" aria-labelledby="categories-list-title">
        <h1 id="categories-list-title" className="text-4xl md:text-5xl font-extrabold text-sky-600">Explore Our Categories</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-xl mx-auto">Discover a universe of products and services waiting for you.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {CATEGORIES_DATA.map(category => (
          <CategoryDisplayCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};
