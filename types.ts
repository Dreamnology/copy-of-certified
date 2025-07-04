
export interface Product {
  id: string;
  name: string;
  price: string;
  seller: string;
  area: string;
  imageUrl: string;
  category: string;
  sellerPhoneNumber?: string; // Optional for WhatsApp
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  pricePerMonth: number;
  features: string[];
  ctaText: string;
  accentStyle: string; // e.g., 'primary', 'secondary', 'highlight' mapped to neutral colors
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface Category {
  name: string;
  path: string;
  icon?: React.ReactNode; // Optional: for a visual representation
  description?: string;
}
