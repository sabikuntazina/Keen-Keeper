
import FriendCard from '../FriendCard';



const HomePageFriends = ({friends}) => {
  
  
  return (
   <div className='max-w-7xl mx-auto my-10 px-5'>
    <h1 className='my-10 text-xl font-bold md:text-3xl'>Your Friends</h1>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {
        friends.map(friend=><FriendCard key={friend.id} friend={friend}></FriendCard>)
      }
    </div>
   </div>
  );
};

export default HomePageFriends;