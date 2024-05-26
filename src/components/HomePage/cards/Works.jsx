"use client"
import React from 'react'
import Card from './Card'
import y4 from "@/media/y4.jpg"
import y1 from "@/media/y1.jpg"
import y2 from "@/media/y2.jpg"
import y3 from "@/media/y3.jpg"
import y5 from "@/media/y5.jpg"
import { motion ,useTransform , useScroll } from "framer-motion";
import { useRef } from 'react';
const Works = () => {
  const target=useRef(null);
  const {scrollYProgress}=useScroll({
    target: target
  })

  const x=useTransform(scrollYProgress ,[0,1] ,["1%" , "-410%"])
  return (
    <div ref={target} className= 'h-[500vh] bg-[#171717]'>
<div  className=' bg-[#171717] sticky h-screen flex items-center justify-center top-0 overflow-hidden'>
    <motion.div style={{x}} className='flex flex-row min-w-full '>
    <Card imgurl={y1} title={"Connect and Discover"} dis={"Connect with family and friends in neighbourhood to enhance relation and belonging"}/>
    <Card imgurl={y2} title={"Live Dreams and share Happiness"} dis={"Live a beautiful life with every moment shared with nearest friends"}/>
    <Card imgurl={y3} title={"celebrate every occasion"} dis={"Celebrate and live every occasion to fullest in a like minded community"}/>
    <Card imgurl={y4} title={"Social Network"} dis={"Create a social network with others and find a perfect neighbour"}/>
    <Card imgurl={y5} title={"Socio-Development"} dis={"Create the world a happy place with every member contributing toward Socio-Development"}/>
    </motion.div>
</div>
    </div>
  )
}

export default Works