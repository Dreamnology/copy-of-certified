import React from 'react';
import { Product } from '../types';
import { WhatsAppIcon } from './IconComponents';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, seller, area, imageUrl, sellerPhoneNumber } = product;

  const handleWhatsAppClick = () => {
    if (sellerPhoneNumber) {
      const message = encodeURIComponent(`Hi ${seller}, I'm interested in your product "${name}" listed on Certified Marketplace.`);
      window.open(`https://wa.me/${sellerPhoneNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-slate-300/50 group hover:border-sky-500">
      <div className="relative w-full h-56">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-sky-600 mb-2 truncate" title={name}>{name}</h3>
        <p className="text-xl text-slate-800 font-bold mb-2">{price}</p>
        <p className="text-sm text-slate-600 mb-1">Seller: <span className="font-medium text-sky-500">{seller}</span></p>
        <p className="text-sm text-slate-600 mb-4">Area: <span className="font-medium text-sky-500">{area}</span></p>
        {sellerPhoneNumber && (
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label={`Contact ${seller} on WhatsApp about ${name}`}
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Contact Seller
          </button>
        )}
      </div>
    </div>
  );
};