
import { Product, SubscriptionPlan, NavItem, Category } from './types';

export const APP_NAME = "Certified Marketplace";

export const APP_ROUTES = {
  HOME: '/',
  BROWSE_ALL: '/browse',
  CATEGORY: '/category', // dynamic part will be :categoryName
  CATEGORIES_LIST: '/categories',
  SERVICES_HELP: '/services-help',
  PROPERTY_VEHICLES: '/property-vehicles',
  COMMUNITY_ITEMS: '/community-items',
  JOBS_BUSINESS: '/jobs-business',
  SUBSCRIPTIONS: '/subscriptions',
  POST_AD: '/post-ad',
  LOGIN: '/login',
  ABOUT: '/about',
  CONTACT: '/contact',
};

export const POLICY_ROUTES = {
  TERMS: '/policies/terms-of-service',
  PRIVACY: '/policies/privacy-policy',
  RETURN: '/policies/return-policy',
  DIGITAL_PRODUCT: '/policies/digital-product-policy',
  CHECKOUT: '/policies/checkout-policy',
};


export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Browse All', path: APP_ROUTES.BROWSE_ALL },
  { label: 'Categories', path: APP_ROUTES.CATEGORIES_LIST },
  { label: 'Services & Help', path: APP_ROUTES.SERVICES_HELP },
  { label: 'Property & Vehicles', path: APP_ROUTES.PROPERTY_VEHICLES },
  { label: 'Community & Items', path: APP_ROUTES.COMMUNITY_ITEMS },
  { label: 'Jobs & Business', path: APP_ROUTES.JOBS_BUSINESS },
  { label: 'Post Ad', path: APP_ROUTES.POST_AD },
  { label: 'Subscriptions', path: APP_ROUTES.SUBSCRIPTIONS },
];

export const SAMPLE_PRODUCTS: Product[] = [
  { id: '1', name: 'Gaming PC Setup', price: 'R15000', seller: 'Mr. John Doe', area: 'Benoni', imageUrl: 'https://picsum.photos/seed/gamingpc/600/400', category: 'Electronics', sellerPhoneNumber: '27820000001' },
  { id: '2', name: 'Vintage Synthesizer', price: 'R8000', seller: 'Jane Smith', area: 'Sandton', imageUrl: 'https://picsum.photos/seed/synth/600/400', category: 'Electronics' },
  { id: '3', name: 'Electric Skateboard Pro', price: 'R4500', seller: 'Mr. John Doe', area: 'Benoni', imageUrl: 'https://picsum.photos/seed/eskate/600/400', category: 'Sports & Leisure', sellerPhoneNumber: '27820000001' },
  { id: '4', name: 'Abstract Art Print', price: 'R750', seller: 'ArtHouse Co.', area: 'Cape Town', imageUrl: 'https://picsum.photos/seed/artprint/600/400', category: 'Home & Garden' },
  { id: '5', name: 'Robotic Pet Companion', price: 'R2200', seller: 'Tech Toys Inc.', area: 'Durban', imageUrl: 'https://picsum.photos/seed/robopet/600/400', category: 'Pets' },
  { id: '6', name: 'Minimalist Sneakers', price: 'R1200', seller: 'Urban Threads', area: 'Pretoria', imageUrl: 'https://picsum.photos/seed/sneakers/600/400', category: 'Fashion' },
  { id: '7', name: 'Smart Herb Pot', price: 'R500', seller: 'Mr. John Doe', area: 'Benoni', imageUrl: 'https://picsum.photos/seed/smartpot/600/400', category: 'Home & Garden', sellerPhoneNumber: '27820000001' },
  { id: '8', name: 'Techwear Jacket', price: 'R1800', seller: 'City Apparel Co.', area: 'Johannesburg', imageUrl: 'https://picsum.photos/seed/cyberjacket/600/400', category: 'Fashion' },
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  { id: '1', name: 'Basic Access', pricePerMonth: 50, features: ['Standard Listing Visibility', '5 Active Listings', 'Community Access'], ctaText: 'Subscribe Now', accentStyle: 'secondary' }, // e.g. gray/slate based
  { id: '2', name: 'Enhanced Reach', pricePerMonth: 80, features: ['Improved Listing Visibility', '15 Active Listings', 'Early Access to Deals', 'Buying Boost Level 1'], ctaText: 'Upgrade Plan', accentStyle: 'primary' }, // e.g. blue/sky based
  { id: '3', name: 'Prime Seller', pricePerMonth: 100, features: ['Premium Listing Placement', 'Unlimited Active Listings', 'Full Buying Boost', 'Priority Support', 'User Insights (Conceptual)'], ctaText: 'Go Prime', accentStyle: 'highlight' }, // e.g. a brighter blue or distinct neutral
];

export const CATEGORIES_DATA: Category[] = [
  { name: 'Cars & Bakkies', path: '/category/cars-bakkies', description: 'Find your next ride, from sedans to utility vehicles.' },
  { name: 'Electronics', path: '/category/electronics', description: 'Latest gadgets, gaming gear, and home electronics.' },
  { name: 'Home & Garden', path: '/category/home-garden', description: 'Furnish your space and cultivate your garden.' },
  { name: 'Property', path: '/category/property', description: 'Rent or buy residential and commercial properties.' },
  { name: 'Jobs', path: '/category/jobs', description: 'Discover job opportunities or find skilled candidates.' },
  { name: 'Automotive Vehicles', path: '/category/automotive-vehicles', description: 'Motorcycles, trucks, and other specialized vehicles.' },
  { name: 'Services', path: '/category/services', description: 'Find local professionals for various services.' },
  { name: 'Boats & Watercraft', path: '/category/boats-watercraft', description: 'Sailboats, motorboats, and jet skis.' },
  { name: 'Baby & Kids', path: '/category/baby-kids', description: 'Everything for your little ones, from toys to essentials.' },
  { name: 'Fashion', path: '/category/fashion', description: 'Clothing, shoes, and accessories for all styles.' },
  { name: 'Sports & Leisure', path: '/category/sports-leisure', description: 'Sporting goods, hobby equipment, and outdoor gear.' },
  { name: 'Business-to-Business', path: '/category/b2b', description: 'Services and products for businesses.' },
  { name: 'Online Services', path: '/category/online-services', description: 'Digital services, freelance work, and online courses.' },
  { name: 'Job Seekers', path: '/category/job-seekers', description: 'Post your resume and find your next career move.' },
  { name: 'Pets', path: '/category/pets', description: 'Find pets, pet supplies, and services.' },
  { name: 'Community', path: '/category/community', description: 'Local announcements, groups, and volunteer opportunities.' },
  { name: 'Charity Donations', path: '/category/charity-donations', description: 'Support local charities and causes.' },
  { name: 'Events', path: '/category/events', description: 'Find out about local events, concerts, and gatherings.' },
];

export const FOOTER_LINKS = [
  { label: 'About Us', path: APP_ROUTES.ABOUT },
  { label: 'Contact Us', path: APP_ROUTES.CONTACT },
  { label: 'FAQ', path: APP_ROUTES.SERVICES_HELP },
  { label: 'Terms of Service', path: POLICY_ROUTES.TERMS },
  { label: 'Privacy Policy', path: POLICY_ROUTES.PRIVACY },
  { label: 'Return Policy', path: POLICY_ROUTES.RETURN },
  { label: 'Digital Product Policy', path: POLICY_ROUTES.DIGITAL_PRODUCT },
  { label: 'Checkout Policy', path: POLICY_ROUTES.CHECKOUT },
];

export const PLAY_STORE_URL = "https://play.google.com/store";
export const APP_STORE_URL = "https://www.apple.com/app-store/";
