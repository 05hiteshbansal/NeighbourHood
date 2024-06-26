"use Client"
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import React from 'react'
import {Textarea} from "@nextui-org/react";
import NavButtons from "../Navigation";
import { useRecoilState } from "recoil";
import { UserData } from "@/utils/Recoil/atom";
import { useForm} from "react-hook-form"
import { UserDataState } from "@/utils/Recoil/atom";
import { ErrorMessage } from "@hookform/error-message"
const PersonalInfo = () => {
    const [data ,setData]=useRecoilState(UserData)
    const [currentStep , setCurrentStep] = useRecoilState(UserDataState);
    const { register,   formState: { errors }, handleSubmit } = useForm()

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
  <p className=" text-blue-900 text-left md:text-3xl text-lg font-serif  "> Enter your Personal info</p>
  <p className=" text-blue-900 text-left  text-sm md:text-lg font-serif pt-2  "> Please enter user detail to map the user with other neighbouthoods</p>
  <div className=" w-full min-h-screen flex pt-5 justify-start items-center flex-col ">
    <form id="dataForm"  onSubmit={handleSubmit(dataentry)} className="w-full  items-center flex flex-col">
   
   <div key={"name"} className={`  w-full mb-full p-3 `}>
     <Input type="text" name="name"    defaultValue={data.name} {...register("name" , {required:" *This is required." ,  minLength :{value:3 , message:"minimum length must be more then 3"}})} label="Name"  />
     <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
   </div>
   <div key={"email"} className="w-full mb-full p-3">
     <Input type="email" name="Email" defaultValue={data.email} {...register("email" , {required:" *This is required." , pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i , message:"Enter a valid email"}})} label="Email"/>
     <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
   </div>
   <div key={"Phnoneno"} className=" w-full mb-full p-3">
     <Input type="number" name="phoneno"  defaultValue={data.phone} {...register("phone" ,{required:" *This is required." ,  maxLength: {value: 11 , message:"Enter a valid Phone"} , minLength: {value: 10 , message:"Enter a valid Phone"}})}  label="Phone no."/>
     <ErrorMessage
        errors={errors}
        name="phone"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
   </div>
   <div key={"bio"} className=" w-full mb-full p-3">
        <Textarea
          name="bio"
          key="bordered"
          labelPlacement="outside"
          defaultValue={data.bio}
          {...register("bio" , {required:"Enter a valid bio"})}
          placeholder="Enter your Bio..."
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <ErrorMessage
        errors={errors}
        name="bio"
        render={({ message }) => <div  className=" text-red-500 text-sm">{message}</div>}
      />
        </div>
   <NavButtons/>
   </form>
   </div>
   </div>
  )
}

export default PersonalInfo