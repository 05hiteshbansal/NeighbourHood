"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { uploadFile } from "../userData/Forms/uploadFile";
const UserProfileData = () => {
  const [file, setFile] = useState();
  const [imageurl, setimageUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s");
 function handleChange(e) {
    console.log(e.target.files);
    const files = e.target.files;
    if (files.length > 0) {
      const fileSize = files.item(0).size;
      const fileSizeMb = fileSize / 1024 ** 2;

      if (fileSizeMb > 1) {
        toast.error("Size is greater than the limit of 1MB .");
        return false;
      }
    }
    setFile(files[0]);
    console.log(file);
    submit(files[0]);
  }

  const submit = async(value) => {
    console.log(file);
    if (!value) {
      toast.error("Please upload a user Profile Image");
    } else {
      const url = await uploadFile(value);
      console.log(url);
      setimageUrl(url)
    }
  };
  return (
    <>
     <Toaster />   
      <div className=" w-full min-h-screen flex justify-center pt-5 ">
        <form className="w-4/5 items-center flex flex-col">
          <div className=" w-[200px] h-[200px] overflow-hidden rounded-full border-5 border-slate-300 relative ">
            <Image width={500} height={500} alt="no" src={imageurl} />
          </div>
         
            <label
              htmlFor="dropzone-file"
              className=" rounded-full z-20 bg-transparent p-6 opacity-0 hover:opacity-100  h-[200px] w-[200px] absolute"
            >
              <p className=" w-[150px] flex items-center justify-center  h-[150px] text-wrap text-center text-white rounded-full backdrop-blur-md text-lg ">
                Click to upload New Pic
              </p>
              <input
                type="file"
                accept="image/*"
                id="dropzone-file"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          <div
            key={"name"}
            className={` flex w-full flex-wrap md:flex-nowrap mb-full p-3 `}
          >
            <Input type="text" name="name" defaultValue={"name"} label="Name" />
          </div>
          <div
            key={"email"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
          >
            <Input type="email" name="Email" label="Email" />
          </div>
          <div
            key={"Phnoneno"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
          >
            <Input type="number" name="phoneno" label="Phone no." />
          </div>
          <div
            key={"Address1"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
          >
            <Input type="text" name="Address1" label="Address 1" />
          </div>
          <div
            key={"Address2"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
          >
            <Input type="text" name="Address2" label="Address 2" />
          </div>
          <div
            key={"location1"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3 gap-2"
          >
            <Input type="text" name="Country" label="Country" />
            <Input type="text" name="State" label="State" />
          </div>
          <div
            key={"location2"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3 gap-2"
          >
            <Input type="text" name="City" label="City" />
            <Input type="text" name="State" label="Pincode" />
          </div>
          <div
            key={"bio"}
            className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
          >
            <Textarea
              name="bio"
              key="bordered"
              labelPlacement="outside"
              placeholder="Enter your Bio..."
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
          </div>
          <div className="w-2/5 m-10">
            <Button
              color="primary"
              variant="ghost"
              className="w-full"
              type="submit"
            >
              Change
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfileData;
