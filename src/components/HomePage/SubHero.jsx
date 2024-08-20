"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import i1 from "@/media/hero21.jpg";

const SubHero = () => {
  const paragraphVariant = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.7,
        damping: 7,
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
    <div className="flex flex-col lg:flex-row justify-center h-[80vh] w-full gap-5 bg-[#171717] relative">
      <motion.div
        variants={paragraphVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        className="lg:w-3/6 w-full h-2/5 lg:h-4/5 flex justify-center ">
        <Image
          src={i1}
          className="object-cover shadow-[0_35px_60px_-15px_rgba(255,255,255,0.5)]"
          alt="none"
          width={i1.width}
          height={i1.height}
        />
      </motion.div>
      <div className="lg:w-2/6 w-full font-serif font-light text-stone-400 p-5 lg:p-10">
        <p className="text-wrap text-center">
          Welcome to the NeighbourGood Community Hub, your ultimate source for
          neighborhood news, events, and resources. Our site offers a vibrant
          calendar of local activities, a directory of nearby businesses and
          services, discussion forums, and emergency alerts, all designed to
          keep you informed and connected. Share photos, engage in community
          projects, and participate in local classifieds to buy, sell, or trade
          with neighbors. Join us for free to stay updated through newsletters
          and social media, fostering a stronger, more connected community where
          neighbors become friends.
        </p>
      </div>
    </div>
  );
};

export default SubHero;
