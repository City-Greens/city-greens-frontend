import React from 'react';

const InfoCard = ({name, products, distance}) => {
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <ul className="mt-2 text-gray-500">
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <div className="mt-2">
            <p className="text-gray-500">Distance: {distance} miles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;