"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SignInButton ,SignOutButton ,UserButton ,useClerk, useUser } from '@clerk/nextjs'
const Navbar = () => {
const {isSignedIn , user}=useUser();
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
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <UserButton/>
  </div>
):(
  <div className=' flex gap-2 p-5 '>
  <Link href={'/sign-in'} className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">SignIn<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <Link href={'/sign-up'} className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">SignUp<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
)}

    
  </div>
</header>
  )
}

export default Navbar