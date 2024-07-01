import React  from 'react'
import { currentUser } from "@clerk/nextjs/server";
import Dashboard from '@/components/dashboard/Dashboard'
import UserData from '@/model/UserData';
import { redirect } from 'next/navigation';
import dbConnect from '@/db/connect';
const page = async() => {
  const user=await currentUser();
  console.log(user);
  const email=user.emailAddresses[0].emailAddress
  console.log(email)
  dbConnect();
   const y= await UserData.findOne({"email":email});
  console.log(y, "mongo");
  if(!y){
    redirect('/userData')
  }
  return(
    <>
      <Dashboard lat={y.latitute} log={y.longitute} email={y.email} />
    </>
  )
}

export default page