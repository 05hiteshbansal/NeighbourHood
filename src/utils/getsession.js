'use server'
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"
export const getsession=async()=>{
    const session= await getServerSession(authOption)
    if(session)
    {return true;}
    
    return false
}