"use client"
import { useState } from 'react'
import ProfileCard from '@/components/dashboard/Card'
import DashboardPagination from '@/components/dashboard/Pagination'
import axios from 'axios'
import React, { useEffect } from 'react'
import Link from 'next/link'
 const Dashboard = ({log,lat,email}) => {
  const[data,setData]=useState([]);
    useEffect(()=>{

        const fetchData=async()=>{
            const data= await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/dashboard` ,{log , lat,email})
            console.log(data);
            setData([...data.data.users])
        }
        fetchData()
    },[])
    console.log(log,lat,email)

    // const data=[
    //   {name: "Mr.M " , bio:"A Engineer and a social worker" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"5"},
    //   {name: "Mr.k " , bio:"A social worker and a Teacher" , imgurl:"https://glance.com.my/wp-content/uploads/2020/04/main_portrait_yee01-310x420.jpg",distance:"0.5"},
    //   {name: "Mr.i " , bio:"A Lawer and a teacher" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"0.3"},
    //   {name: "Mr.o " , bio:"City Administator" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"1"},
    //   {name: "Mr.p " , bio:"Police man and a social worker" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"1.2"},
    //   {name: "Mr.u " , bio:"A teenager in his 20's" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"1.9"},
    //   {name: "Mr.r " , bio:"A self independent women" , imgurl:"https://glance.com.my/wp-content/uploads/2020/04/main_portrait_yee01-310x420.jpg",distance:"7"},
    //   {name: "Mr.w " , bio:"A Doctor and has a personal clinic" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"10"},
    // ]
    console.log(data);
      return (
        <div>
        <p className=' text-black '> Your Near Neighbours</p>
          <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap m-4 items-center justify-center">
        {data.map((d ,index)=>(
          <Link href={`/dashboard/${d._id}`} key={index} className=' flex flex-row m-4  sm:w-full md:w-1/2 lg:w-1/4  '>
            <ProfileCard  name={d.name} bio={d.bio} imgurl={d.imageurl} distance={d.distance}/>
          </Link>
        ))}
        </div>
      </div>
      <div className=' flex items-center justify-center'>
    <DashboardPagination/>
      </div>
    </section> 
    
        </div>
      )
 }
 
 export default Dashboard