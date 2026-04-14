import React from 'react';
import { useLoaderData } from 'react-router';

const Friends = () => {
  const friends= useLoaderData();
  console.log(friends)
  return (
    <div>
      
    </div>
  );
};

export default Friends;