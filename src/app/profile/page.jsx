import UserProfileData from '@/components/UserProfile/UserProfileData'
import CreatePost from '@/components/UserProfile/CreatePost'
import { currentUser } from "@clerk/nextjs/server";
import { Divider } from '@nextui-org/react';
import React from 'react'
const page = async() => {
  const user=await currentUser();
  //console.log(user)
  const email=user.emailAddresses[0].emailAddress;
  return (
    <div className=' flex lg:flex-row flex-col items-center justify-center '>
    <div className=' w-1/2'>
    <UserProfileData/>
    </div>
    {/* <div className=' text-gray-100'>
    <div className=' flex flex-col items-center justify-center'> */}
      {/* <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
    </div>
    or
    <div className=' flex flex-col items-center justify-center'>
      <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
    </div>
    </div> */}

    <Divider orientation="vertical" />
    <div className=' w-1/2'>
    <CreatePost email={email}/>
    </div>
    </div>
  )
}

export default page