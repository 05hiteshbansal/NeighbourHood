import React from 'react'
import NavButtons from "../Navigation";
import { useRecoilValue } from "recoil";
import { UserData } from "@/utils/Recoil/atom";
import {Button} from "@nextui-org/react";
const Confirm = () => {
  const data=useRecoilValue(UserData)
console.log(data);
  return (
   
    <div className=" w-full">
  <p className=" text-blue-900 text-left md:text-3xl text-lg font-serif  "> Enter your Address info</p>
  <p className=" text-blue-900 text-left  text-sm md:text-lg font-serif pt-2  "> Please enter user address detail to map the user with other neighbouthoods</p>
   <div className=" w-full min-h-screen flex justify-center items-center pt-5 text-blue-900 ">
         <form className="w-2/5  items-center flex flex-col">
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