import { SignUp } from "@clerk/nextjs";
import React from 'react'
import Image from 'next/image'
import img from "@/media/Login.jpg"

  const page = () => {
  return (
<div className=' flex w-full flex-col md:flex-row min-h-screen items-center justify-center '>
  <div className=' w-full  h-full object-cover p-10  '>
    <Image alt=" " width={img.width} height={ img.height} src={img}/>
  </div>
  <div className=' flex items-center justify-center w-full  h-full'>
  <SignUp/>
  </div>
</div>


  )}
  
  export default page