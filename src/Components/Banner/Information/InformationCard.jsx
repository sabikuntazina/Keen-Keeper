import React from 'react';

const InformationCard = ({friends}) => {
  return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto py-10 border-b-2 border-gray-300 mb-10">
 
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-5xl font-bold text-gray-700">{friends.length}</p>
          <p className="text-xl md:text-xl text-gray-700">Total Friends</p>
         </div>
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-5xl font-bold text-gray-700">3</p>
          <p className="text-xl md:text-xl text-gray-700">On track</p>
         </div>
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-5xl font-bold text-gray-700">6</p>
          <p className="text-xl md:text-xl text-gray-700">Need Attention</p>
         </div>
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-5xl font-bold text-gray-700">12</p>
          <p className="text-xl md:text-xl text-gray-700">Interactions This Month</p>
         </div>
         
</div>
  );
};

export default InformationCard;