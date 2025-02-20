import React from 'react';
import Head from 'next/head';

const PackageCard = ({ name, icon, description, price, features, mostPopular, isMonthly }) => {
  return (
    <div className={`bg-white rounded-none w-[330px] h-[671px] 
      ${mostPopular ? "shadow-lg" : ""} 
      p-8 relative`}>
    
    {mostPopular && (
      <span className="bg-[#139FDD] text-white text-[11px] font-[700] text-center py-1 h-[26px] w-[330px] rounded-none absolute top-0 left-0 z-10">
        MOST POPULAR
      </span>
    )}
    <h2 className="text-[52px] font-[500] text-center text-gray-800 mb-4">{icon}</h2>
    <h2 className="text-[13px] font-[700] text-center text-gray-800 mb-4">{name}</h2>
    <p className="text-gray-600 text-[14px] font-[400] text-center mb-6">{description}</p>
    <div className="flex items-center justify-center mb-6">
      {/* <span className="text-5xl font-bold text-blue-500 mr-2">$</span> */}
      <p className="text-[48px] font-[800] text-center text-gray-800"><span className='text-sm text-[#a09f9f]'>৳</span>{isMonthly ? price : (price * 12)}</p>
    </div>
    <ul className="list-none pl-0 text-gray-600 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-[16px] font-[500]">
          <img
            src="Icon.png"
            className='border rounded-full p-[2px] mr-2 border-black'
          >
          </img>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`${mostPopular ? "bg-[#2757BE]" : "bg-[#f4f4f5]" } h-[55px] w-[249px]  ${mostPopular ? "text-white" : "btext-black" }  font-[700] text-[16px] py-3 px-6 rounded-none mt-8 transition duration-300`}>
      Get Started
    </button>
  </div>
  );
};

export default PackageCard;