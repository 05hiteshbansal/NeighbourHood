import React from 'react'
import NavButtons from "../Navigation";
import { useRecoilValue } from "recoil";
import { UserData } from "@/utils/Recoil/atom";
import {Button} from "@nextui-org/react";
import axios  from 'axios';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation'
const Confirm = () => {
  const router = useRouter()
  const data=useRecoilValue(UserData)

  const Handlesubmit = async (e) => {
    try {
       toast.loading("loading");
       const log=data.longitute
       const lat=data.latitute
       const y={
        ...data,  
        location:{
            type:'Point',
            coordinates:[
              log,
              lat
              
            ]
          }
        }
   
       const res= await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/usersaved` ,y)
       console.log(res);
       toast.dismiss();
       if(res.data.success){
         toast.success(res.data.message)
         router.push('/dashboard')
       }
       else{
         toast.error(res.data.message)
       }
       
    } catch (error) {
     console.log(error)   
     toast.error(error.message) 
    }
     };

  console.log(data);
  return (

    <div className=" w-full">
  <Toaster/>
  <p className=" text-blue-900 text-left md:text-3xl text-lg font-serif  "> Enter your Address info</p>
  <p className=" text-blue-900 text-left  text-sm md:text-lg font-serif pt-2  "> Please enter user address detail to map the user with other neighbouthoods</p>
   <div className=" w-full min-h-screen flex justify-center items-center pt-5 text-blue-900 ">
         <form className="w-2/5  items-center flex flex-col" action={Handlesubmit}>
        <div  className={` flex w-full flex-wrap md:flex-nowrap mb-full p-3 `}>
          Name : {data.name}
        </div>
        <div  className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
        Email : {data.email}
        </div>
        <div  className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
        Phone No. : {data.phone}
        </div>
        <div  className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
        Address  : {data.address1 } {data.address2}
        </div>
        <div  className="flex w-full flex-wrap md:flex-nowrap mb-full p-3 gap-2">
        <div>
          Country : {data.country}
        </div>
        <div>
        State : {data.state}
        </div>
        </div>
        <div  className="flex w-full flex-wrap md:flex-nowrap mb-full p-3  gap-2">
        <div>
         City : {data.city}
        </div>
        <div>
        Pincode : {data.pincode}
        </div>
        </div>
        <div key={"bio"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
        BioData : {data.bio}
        </div>
        <div className="w-2/5 m-10">
        <Button color="primary" variant="ghost" className="w-full"  type="submit"  >
        Save
      </Button>
        </div>
    <NavButtons/>
    </form>
    </div>
 </div>


  )
}

export default Confirm