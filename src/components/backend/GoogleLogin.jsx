"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {signIn} from "next-auth/react"
import { faGoogle ,faGithub  } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
const googleFunc=()=>{
  console.log("google")
  signIn('google', { callbackUrl: '/dashboard' })
}
const githubFunc=()=>{
  console.log("github")
  signIn('github', { callbackUrl: '/dashboard' })
  
}

const GoogleProvider = () => {
  return (
    <>
    <div className=' flex items-center justify-center flex-col gap-2'>
    <button className='px-2 py-5 md:w-2/5 w-4/5  bg-red-600 text-white font-bold rounded-md flex items-center gap-2 justify-center m-4 ' onClick={googleFunc}><FontAwesomeIcon className='w-6 h-6 items-center' icon={faGoogle} /><div>Sign in Google</div></button>
    <button className='px-2 py-5 md:w-2/5 w-4/5  bg-black text-white font-bold rounded-md flex items-center gap-2 justify-center m-4' onClick={githubFunc}><FontAwesomeIcon className='w-6 h-6 items-center' icon={faGithub} />Sign in GitHub</button>
    </div>
    </>
  )
}

export default GoogleProvider