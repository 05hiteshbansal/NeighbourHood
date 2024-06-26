"use Client"
import {Input} from "@nextui-org/react";
import React from 'react'
import NavButtons from "../Navigation";
import { useRecoilState } from "recoil";
import { UserData } from "@/utils/Recoil/atom";
import { useForm} from "react-hook-form"
import { UserDataState } from "@/utils/Recoil/atom";
import { ErrorMessage } from "@hookform/error-message"
const Address = () => {
    const [data ,setData]=useRecoilState(UserData)
    const [currentStep , setCurrentStep] = useRecoilState(UserDataState);
    const { register, formState: { errors } ,handleSubmit } = useForm()

    const dataentry=(value)=>{
        //console.log(value);
        const y={
          ...data,
          ...value
        }
        setData(y)
        //console.log(data ,123)
        setCurrentStep(currentStep + 1);
    }


  return (
    <div className=" w-full">
  <p className=" text-blue-900 text-left md:text-3xl text-lg font-serif  "> Enter your Address info</p>
  <p className=" text-blue-900 text-left  text-sm md:text-lg font-serif pt-2  "> Please enter user address detail to map the user with other neighbouthoods</p>
    <div className=" w-full min-h-screen flex pt-5 justify-start flex-col items-center  ">
     <form onSubmit={handleSubmit(dataentry)} className="w-full  items-center flex flex-col">
   
        <div key={"Address1"} className=" w-full mb-full p-3">
          <Input type="text" name="Address1"  defaultValue={data.address1}  {...register("address1" , {required:" *Field is required"})} label="Address 1"/>
          <ErrorMessage
        errors={errors}
        name="address1"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
        </div>
        <div key={"Address2"} className="w-full mb-full p-3">
          <Input type="text" name="Address2" defaultValue={data.address2}  {...register("address2")} label="Address 2"/>
        </div>
        <div key={"locationCountry"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3 gap-2">
          <div className=" w-full">

          <Input type="text" name="country" defaultValue={data.country} {...register("country" , {required:"*Field is required"})}   label="Country"/>
          <ErrorMessage
        errors={errors}
        name="country"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
          </div>

          <div className=" w-full">

          <Input type="text" name="State"  defaultValue={data.state}  {...register("state" , {required:"*Field is required"})}    label="State"/>
          <ErrorMessage
        errors={errors}
        name="state"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
          </div>
        </div>
        <div key={"locationState"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3 gap-2">
          <div className=" w-full">

          <Input type="text" name="City" defaultValue={data.city} {...register("city" , {required:"*Field is required"})}   label="City"/>
          <ErrorMessage
        errors={errors}
        name="city"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
          </div>

          <div className=" w-full">

          <Input type="text" name="pincode" defaultValue={data.pincode} {...register("pincode" , {required:"*Field is required"})}  label="Pincode"/>
          <ErrorMessage
        errors={errors}
        name="pincode"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
          </div>
        </div>
    <NavButtons/>
    </form>
    </div>
    </div>
  )
}

export default Address