import { useState } from "react";

function Profile() {
  const [toggleLike, setToggleLike] = useState(false)
  let liked = 531
  const handleToggle = () => {
    setToggleLike(!toggleLike)
  }
  if (toggleLike === true) {
    liked += 1
  } else {
    liked = 531
  }
  return (
    <div className=' bg-white relative pb-6 grid grid-cols-2 '>
      <div className='absolute shadow mx-10 h-28 w-28  border-white rounded-full overflow-hidden -mt-12 '>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="not found"
          className='object-cover w-full h-full '
        />
      </div>
      <div className=' flex items-center flex-col gap-8'>
        <div className='text-left ml-36'>
          <h1 className='block mb-4 font-bold text-xl'>IAM Core</h1>
          <p className='font-semibold text-lg'>Studievereniging Communicatie & Multimedia Design (CMD)</p>
        </div>
        <div className='flex  gap-10  justify-center  items-center ml-36'>
          <div className='mt-4 flex gap-4 '>
            <span className='text-gray-400 text-lg'>{liked} likes</span>
            <span className='text-gray-400 text-lg'>350 followers</span>
          </div>
          <div className=' flex justify-center items-center gap-12 '>
            <div className='pl-3 py-2 pr-20 bg-gray-300  cursor-pointer' onClick={handleToggle}>like</div>
            <div className='pl-3 pr-20 py-2 bg-gray-300 cursor-pointer'>join</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;