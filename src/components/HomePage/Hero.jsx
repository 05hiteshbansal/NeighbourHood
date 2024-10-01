"use client";
import React from "react";
import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";

const Hero = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [url, seturl] = useState(0);
  const [urls, setUrls] = useState("/v0.mp4");
  useEffect(() => {
    const updateurls = () => {
      let y = `/v${url}.mp4`;
      return setUrls(() => y);
    };
    updateurls();
    
  }, [url]);

  useEffect(() => {
    
    const setEvent = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setEvent);
    return () => {
      window.removeEventListener("mousemove", setEvent);
    };
  }, []);
  //console.log(urls);
  return (
    <>
      <div className="relative max-w-full h-screen  bg-black overflow-hidden">
        <motion.div
          className=" bg-white lg:w-[500px] lg:h-[500px]  top-0 absolute z-20 rounded-full mix-blend-overlay bg-blend-difference "
          
          animate={{
            x: mousePos.x - 250,
            y: mousePos.y - 250,
          }}
          
        />
        <motion.video
          key={url}
          autoPlay
          muted
          onEnded={() => seturl((prev) => (prev + 1) % 3)}
          className=" w-full h-full absolute top-0 object-cover transition ease-in-out brightness-50"
          src={urls}
        />
        <div className=" flex flex-col font-serif text-6xl relative z-21 justify-center items-center h-full w-full ">
        <div className="flex flex-col font-serif w-full lg:w-3/5 text-6xl justify-center items-center p-20 rounded-sm backdrop-contrast-[.80] gap-4">
          <div className=" lg:text-[100px] text-[50px]  ">Neighbourhood</div>
          <div className=" text-[20px]  text-wrap">Neighborgood it is a mission to provide simple platform for Neighborgood to form connections and communities .We are achieveing this by creating a AI chart-Bot </div>
          <button className=" p-5 text-[20px] bg-yellow-500  text-zinc-900"> Get Started </button>
          {/* <div>Logo</div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
