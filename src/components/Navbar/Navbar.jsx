"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {Button} from "@nextui-org/react";
import { SignInButton ,SignOutButton ,UserButton ,useClerk, useUser } from '@clerk/nextjs'
const Navbar = () => {
const {isSignedIn , user}=useUser();
const router = useRouter();
const {signOut}=useClerk();
  return (
    <header className="text-slate-300 body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <Link href={'/'} className="flex title-font font-medium items-center  mb-4 md:mb-0 fill-slate-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">NeighbourHood</span>
    </Link>
    
{isSignedIn?(
  <div className=' flex gap-2 p-5'>
        <Button onClick={()=>{router.push('/profile')}} color="secondary">
        Profile
      </Button>
      <Button onClick={()=>{router.push('/dashboard')}} color="secondary">
        Dashboard
      </Button>
        <UserButton/>
  </div>
):(
  <div className=' flex gap-2 p-5 '>
  <Button onClick={()=>{router.push('/sign-in')}} color="secondary">
        SignIn
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      </Button>
    <Button onClick={()=>{router.push('/sign-up')}} color="secondary">
        Sign-Up
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      </Button>
  </div>
)}

    
  </div>
</header>
  )
}

export default Navbar