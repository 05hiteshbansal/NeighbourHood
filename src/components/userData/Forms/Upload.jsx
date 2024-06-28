"use client"
import Image from "next/image";
import React, { useState } from "react";
import NavButtons from "../Navigation";
import toast, { Toaster } from 'react-hot-toast';
import { uploadFile } from "./uploadFile";
import { useRecoilState } from "recoil";
import { UserData } from "@/utils/Recoil/atom";
const Upload = () => {
    const [data ,setData]=useRecoilState(UserData)
    const [file, setFile] = useState("");
    const [LocalFile, setLocalFile] = useState("");

    function handleChange(e) {
        console.log(e.target.files);
        const files=e.target.files
        if (files.length > 0) {
            const fileSize = files.item(0).size;
            const fileSizeMb = fileSize / 1024 ** 2;
            
            if (fileSizeMb > 1) {
                toast.error('Size is greater than the limit of 1MB .')
                return false
            }
        }
        setLocalFile(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));

}
const submit=()=>{
    if(!LocalFile){
        toast.error('Please upload a user Profile Image')
    }
    else{
        const url=uploadFile(LocalFile)
        const y={
            ...data,
            "imageurl":url
          }
          setData(y)
    }
}


// const geolocation=()=>{
    
// }
    // <input type="file" onChange={handleChange} />
    // {/*  */}
 
    return (
        <>
        {/* <form> */}

        <Toaster />     
<div className={`flex items-center justify-center w-full `}  >
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input type="file" accept="image/*" id="dropzone-file" className="hidden"  onChange={handleChange} />
    </label>
</div> 

<div >{file ? <div className=" flex mt-3 p-3 flex-row text-blue-800 text-md border-dashed rounded-xl  border-2  border-stone-300 border-spacing-4"> <div className=" w-[120px]   "><Image  alt="no image"  className="object-cover" src={file} width={500} height={500} /></div> <div className=" font-serif text-lg pl-3 text-center  "> Uploaded User Profile Image </div></div> : <p className=" font-serif text-lg pl-3 pt-4 text-center text-blue-800  ">Upload your Profile Image</p>}</div>
        
       {/* <div>
       <div className=" text-blue-800 ">User Location : </div>
        <Button onClick={geolocation}> Click to verify </Button>
       </div>  */}
        <div onClick={submit}>
        <NavButtons />
        </div>
{/* </form>*/}
        </>


    );
}

export default Upload