import React, { Suspense, use } from 'react';
import Friends from '../../Components/Friends/Friends';
import HomePageFriends from '../../Components/Friends/HomePageFriends/HomePageFriends';
import Banner from '../../Components/Banner/Banner';
import InformationCard from '../../Components/Banner/Information/InformationCard';

const friendsPromise= fetch('/data.json').then(res=>res.json());
const HomePage = () => {
  const friends= use(friendsPromise);
  return (
    <div className='bg-[#f8fafc]'>
      <div className='px-5'>

      <Banner friends={friends} ></Banner>
       <InformationCard friends={friends}></InformationCard>
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center items-center max-w-7xl mx-auto p-10 my-96"></span>}>

      <HomePageFriends friends={friends}></HomePageFriends>
      </Suspense>
      </div>

    </div>
  );
};

export default HomePage;