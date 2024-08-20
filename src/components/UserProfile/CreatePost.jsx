"use client";
import axios from "axios";
import { useState } from "react";
import { FaImage, FaChartBar, FaClock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { ErrorMessage } from "@hookform/error-message";
import { Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import { uploadFile } from "../userData/Forms/uploadFile";
export default function CreatePost({email}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [file, setFile] = useState("");
  const [LocalFile, setLocalFile] = useState("");
  const [postContent, setPostContent] = useState("");
  const types = [
    {
      title: "Feeds",
      key: 1,
    },
    {
      title: "Lost & Found",
      key: 2,
    },
    {
      title: "Sell & Buy",
      key: 3,
    },
    {
      title: "Local events",
      key: 4,
    },
    {
      title: "Services",
      key: 5,
    },
  ];

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
    setLocalFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  
  }

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const submit = async (value) => {
    const updatedData = {
      ...value,
    };
    if(file){
      const url = await uploadFile(LocalFile);
      console.log(url);
      updatedData["postimage"]=url;
    }
    updatedData["email"]=email;
console.log(updatedData);
      try {
        toast.loading("loading");
        const res= await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/post` ,updatedData)
       console.log(res);
       toast.dismiss();
       if(res.data.success){
         toast.success(res.data.message)
       }
       else{
         toast.error(res.data.message)
       }
      } catch (error) {
        console.log(error)   
        toast.error(error.message) 
       }


  };


  
  return (
    <>
      <Toaster/>
      <h1 className="text-4xl font-bold text-gray-800 pb-10 text-center">
        Create Post
      </h1>
      <div className="w-3/5 max-h-lg mx-auto p-6 bg-white rounded-xl shadow-lg border">
        <form
          id="dataForm"
          onSubmit={handleSubmit(submit)}
          method="post"
          className="w-full items-center justify-center flex flex-col"
        >
          <div className="flex w-full flex-col items-center mb-4">
            {/* <img
              src="/path-to-profile-pic.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            /> */}
            <div key={"Title"} className={` w-full mb-full `}>
              <Input
                type="text"
                name="Title"
                {...register("Title", {
                  required: " *Please Enter A Title",
                  minLength: {
                    value: 3,
                    message: "minimum length must be more then 3",
                  },
                })}
                label="Title"
              />
              <ErrorMessage
                errors={errors}
                name="Title"
                render={({ message }) => (
                  <div className=" text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
          </div>

          <div key={"Detail"} className=" w-full mb-4  text-black">
            <Textarea
              name="Detail"
              label="Description"
              {...register("Detail", { required: "Enter A Detail of Event" })}
              Value={postContent}
              onChange={handlePostContentChange}
              className="w-full border-none focus:outline-none resize-none text-gray-700"
              placeholder="How does it sound, to create beautiful illustrations..."
              rows="3"
            />
            <ErrorMessage
              errors={errors}
              name="Detail"
              render={({ message }) => (
                <div className=" text-red-500 text-sm">{message}</div>
              )}
            />
          </div>

          {/* Type Drawer */}
          <div className="flex w-full flex-wrap gap-4  text-black">
            <Select label="Select any Type"
             name="event"
              {...register("event", { required: "Enter A Type of Event" })}>

              {types.map((type) => (
                <SelectItem className=" text-black" key={type.title}>
                  {type.title}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex items-center justify-between w-4/5 mt-4">
            <div>
              <div className="flex items-center space-x-4">
                {/* <button className="text-gray-400 hover:text-gray-600">
                  <FaClock className="w-5 h-5" />
                </button> */}

                <label htmlFor="drop-file">
                  <div className="text-gray-400 hover:text-gray-600">
                    <FaImage className="w-5 h-5" />
                  </div>
                  <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    id="drop-file"
                    onChange={handleChange}
                  />
                </label>
                <div>
                  {file ? (
                    <div className=" flex mt-3 p-3 flex-row text-blue-800 text-md border-dashed rounded-xl  border-2  border-stone-300 border-spacing-4">
                      <div className=" w-[120px]   ">
                        <Image
                          alt="no image"
                          className="object-cover"
                          src={file}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className=" font-serif text-lg pl-3 text-center  ">
                        Uploaded User Notice Image
                      </div>
                    </div>
                  ) : (
                    <p className=" font-serif text-lg pl-3 pt-4 text-center text-gray-400  ">
                      Upload Image
                    </p>
                  )}
                </div>
              </div>

              <button type="submit" className="bg-green-600 text-white px-4 mt-2 py-2 rounded-lg shadow hover:bg-green-700">
                Share post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
