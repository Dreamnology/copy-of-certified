
import React from 'react';
import { APP_NAME } from '../constants';

export const AboutPage: React.FC = () => {
  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-2xl border-2 border-slate-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">About {APP_NAME}</h1>
      
      <div className="prose prose-defaultLight prose-lg max-w-none text-slate-700 space-y-6">
        <p>
          Welcome to {APP_NAME}, a futuristic and secure local trading platform designed to connect communities
          and empower individuals and businesses. Our mission is to provide a trustworthy and innovative marketplace
          for buying, selling, and discovering a wide range of goods and services.
        </p>
        
        <h2 className="text-sky-500">Our Vision</h2>
        <p>
          We envision a world where local commerce thrives through technology, fostering stronger community bonds
          and creating economic opportunities for everyone. {APP_NAME} aims to be at the forefront of this
          evolution by integrating advanced verification methods and user-centric design.
        </p>

        <h2 className="text-sky-500">Key Features (Conceptual)</h2>
        <p>
          {APP_NAME} is built with a focus on security, convenience, and community:
        </p>
        <ul>
          <li>
            <strong>Advanced Verification:</strong> Conceptual features like facial recognition login and camera-only image
            uploads (via our mobile app) are designed to enhance trust and reduce fraudulent activity.
          </li>
          <li>
            <strong>Modern Marketplace Experience:</strong> An intuitive interface for browsing, searching, and listing items,
            making trading effortless and enjoyable.
          </li>
          <li>
            <strong>Community Connection:</strong> More than just a marketplace, {APP_NAME} aims to be a hub for local
            interaction, services, and opportunities.
          </li>
          <li>
            <strong>Diverse Categories:</strong> From electronics and vehicles to jobs and community events, find almost
            anything you need or wish to offer.
          </li>
        </ul>

        <h2 className="text-sky-500">Our Commitment</h2>
        <p>
          We are committed to continuously improving {APP_NAME} by listening to our users, adopting new technologies,
          and upholding the highest standards of safety and integrity. Your trust is paramount, and we work diligently
          to ensure a secure and reliable platform for all your trading needs.
        </p>
        <p>
          Thank you for being a part of the {APP_NAME} community!
        </p>
      </div>
    </div>
  );
};
