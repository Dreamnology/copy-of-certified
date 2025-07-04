
import React from 'react';
import { SubscriptionPlan } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan }) => {
  const { id, name, pricePerMonth, features, ctaText, accentStyle } = plan;

  let borderColorClass = 'border-slate-300'; 
  let textColorClass = 'text-slate-600'; 
  let buttonBgClass = 'bg-slate-600 hover:bg-slate-500 text-white'; 
  let ringColorClass = 'focus-visible:ring-slate-400';
  let titleColorClass = 'text-slate-800'; 

  if (accentStyle === 'primary') { 
    borderColorClass = 'border-sky-500';
    textColorClass = 'text-sky-600'; 
    titleColorClass = 'text-sky-600';
    buttonBgClass = 'bg-sky-600 hover:bg-sky-500 text-white';
    ringColorClass = 'focus-visible:ring-sky-400';
  } else if (accentStyle === 'secondary') { 
    borderColorClass = 'border-slate-400';
    textColorClass = 'text-slate-500';
    titleColorClass = 'text-slate-700';
    buttonBgClass = 'bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-400'; 
    ringColorClass = 'focus-visible:ring-slate-500';
  } else if (accentStyle === 'highlight') { 
    borderColorClass = 'border-sky-600 shadow-lg'; 
    textColorClass = 'text-sky-500';
    titleColorClass = 'text-sky-500';
    buttonBgClass = 'bg-sky-500 hover:bg-sky-400 text-white';
    ringColorClass = 'focus-visible:ring-sky-300';
  }

  const featuresListId = `plan-${id}-features`;

  return (
    <div className={`bg-white p-8 rounded-xl shadow-2xl border-2 ${borderColorClass} flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg force-focus-style`}>
      <h3 id={`plan-${id}-name`} className={`text-3xl font-bold ${titleColorClass} mb-4 text-center`}>{name}</h3>
      <p className="text-5xl font-extrabold text-slate-900 mb-2 text-center"> 
        R{pricePerMonth}
        <span className="text-base font-normal text-slate-500">/month</span>
      </p>
      <ul aria-labelledby={`plan-${id}-name`} id={featuresListId} className="space-y-3 my-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className={`w-6 h-6 ${textColorClass} mr-2 flex-shrink-0`} aria-hidden="true" />
            <span className="text-slate-600">{feature}</span> 
          </li>
        ))}
      </ul>
      <button
        className={`w-full ${buttonBgClass} font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${ringColorClass}`}
      >
        {ctaText}
      </button>
    </div>
  );
};
