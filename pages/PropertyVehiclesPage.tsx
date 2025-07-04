
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../constants'; 

export const PropertyVehiclesPage: React.FC = () => {
  const propertyProducts = SAMPLE_PRODUCTS.filter(p => p.category === 'Property' || p.imageUrl.includes('house') || p.imageUrl.includes('apartment')).slice(0,3);
  const vehicleProducts = SAMPLE_PRODUCTS.filter(p => p.category === 'Cars & Bakkies' || p.category === 'Automotive Vehicles' || p.imageUrl.includes('car') || p.imageUrl.includes('vehicle')).slice(0,3);
  
  return (
    <div className="space-y-12 p-4 md:p-8 bg-white rounded-xl shadow-xl border border-slate-200">
      <h1 className="text-4xl font-bold text-center text-sky-600">Property & Vehicles</h1>
      <p className="text-lg text-slate-600 mt-4 text-center max-w-xl mx-auto">Your destination for finding the perfect home, rental, or your next set of wheels. Secure and verified listings in your local area.</p>

      <section aria-labelledby="featured-properties-title">
        <h2 id="featured-properties-title" className="text-3xl font-semibold text-sky-500 mb-6">Featured Properties</h2>
        {propertyProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyProducts.map(product => (
              <ProductCard key={product.id} product={{...product, category: "Property"}} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-center py-6">Property listings coming soon. Check back later!</p>
        )}
      </section>

      <section aria-labelledby="featured-vehicles-title">
        <h2 id="featured-vehicles-title" className="text-3xl font-semibold text-sky-500 mb-6">Featured Vehicles</h2>
         {vehicleProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleProducts.map(product => (
              <ProductCard key={product.id} product={{...product, category: "Vehicles"}} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-center py-6">Vehicle listings coming soon. Explore other options!</p>
        )}
      </section>

      <section className="text-center mt-10">
        <p className="text-slate-600">
          Use our advanced search (coming soon) to filter by location, price, type, and more specific features for properties and vehicles.
        </p>
      </section>
    </div>
  );
};
