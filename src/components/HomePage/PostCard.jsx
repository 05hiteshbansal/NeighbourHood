"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import i1 from "@/media/postcard.jpg";
import i2 from "@/media/postcard2.jpg";

const PostCard = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const image1 = {
    hidden: {
      opacity: 0,
      x: "100px",
      y: "100px",
    },
    visible: {
      opacity: 1,
      x: -50,
      y: 50,
      transition: {
        type: "spring",
        mass: 0.7,
        damping: 7,
        delay: 0.8,
        ease: "easeIn",
      },
    },
    exit: {
      x: "-100px",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const image2 = {
    hidden: {
      opacity: 0,
      x: "-100px",
      y: "-100px",
    },
    visible: {
      opacity: 1,
      x: 50,
      y: -50,
      transition: {
        type: "spring",
        mass: 0.7,
        damping: 7,
        delay: 0.8,
        ease: "easeIn",
      },
    },
    exit: {
      x: "-100px",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div className="flex flex-col lg:flex-row justify-center h-auto lg:h-[80vh] w-full bg-[#171717] p-5 gap-12 lg:gap-0">
      <div className="lg:w-3/6 w-4/6 h-[50vh] lg:max-h-4/5 flex relative m-auto lg:m-5">
        <motion.div
          ref={ref1}
          variants={image1}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          className="w-full h-full absolute top-0 left-0"
          style={{ zIndex: 1 }}
        >
          <Image
            src={i2}
            className="object-cover w-full h-full shadow-[0_35px_60px_-15px_rgba(255,255,255,0.5)]"
            alt="none"
          />
        </motion.div>
        <motion.div
          ref={ref2}
          variants={image2}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          className="w-full h-full absolute top-0 left-0"
          style={{ zIndex: 2 }}
        >
          <Image
            src={i1}
            className="object-cover w-full h-full shadow-[0_35px_60px_-15px_rgba(255,255,255,0.5)]"
            alt="none"
          />
        </motion.div>
      </div>
      <div className="lg:w-2/6 w-full pl-5 lg:pl-20 pb-5 lg:pb-10 font-serif font-light text-stone-400 flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-[30px] lg:text-[50px] font-serif pb-3 lg:pb-5">
          Send your Dearest
        </p>
        <p className="text-wrap">
          Our Digital Postcards feature allows residents to share personalized,
          virtual greetings with neighbors, celebrating the community spirit of
          Neighborhood. Whether you want to send birthday wishes, holiday
          greetings, or thank you notes, our easy-to-use tool lets you create
          beautiful, customized postcards. Choose from a variety of templates,
          add your message, and include photos or graphics to make your card
          unique. Once your postcard is ready, you can send it directly through
          the website or share it via email and social media. This feature helps
          foster a friendly and connected neighborhood by making it simple to
          reach out and show you care.
        </p>
        <button className="px-4 py-2 lg:px-5 lg:py-3 rounded-lg bg-yellow-500 text-gray-700">
          Send it
        </button>
      </div>
    </motion.div>
  );
};

export default PostCard;
