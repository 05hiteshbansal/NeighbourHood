import Image from "next/image";
import Hero from "@/components/HomePage/Hero";
import Works from "@/components/HomePage/cards/Works";
import SubHero from "@/components/HomePage/SubHero";
import PostCard from "@/components/HomePage/PostCard";
export default function Home() {
  return (
    <>
    <Hero/>
    <div className="bg-[#171717] text-[100px] py-40 font-serif text-slate-400 text-center">Our Services</div>
    <Works/>
    <div className="bg-[#171717] text-[80px] py-20 font-serif text-slate-400 text-center underline">We offer</div>
    <SubHero/>
    <div className="bg-[#171717] text-[80px] py-20 font-serif text-slate-400 text-center underline">Post Card</div>
    <PostCard/>
    </>
  );
}
