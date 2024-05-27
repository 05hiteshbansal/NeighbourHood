import Card from '@/components/dashboard/Card'
import React from 'react'

const page = () => {

const data=[
  {name: "Mr.M " , bio:"A Engineer and a social worker" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"5"},
  {name: "Mr.k " , bio:"A social worker and a Teacher" , imgurl:"https://glance.com.my/wp-content/uploads/2020/04/main_portrait_yee01-310x420.jpg",distance:"0.5"},
  {name: "Mr.i " , bio:"A Lawer and a teacher" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"0.3"},
  {name: "Mr.o " , bio:"City Administator" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"1"},
  {name: "Mr.p " , bio:"Police man and a social worker" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"1.2"},
  {name: "Mr.u " , bio:"A teenager in his 20's" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"1.9"},
  {name: "Mr.r " , bio:"A self independent women" , imgurl:"https://glance.com.my/wp-content/uploads/2020/04/main_portrait_yee01-310x420.jpg",distance:"7"},
  {name: "Mr.w " , bio:"A Doctor and has a personal clinic" , imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s",distance:"10"},
]

  return (
    <div>
    <p className=' text-black '> Your Near Neighbours</p>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {data.map((d ,index)=>(
        <Card key={index} name={d.name} bio={d.bio} imgurl={d.imgurl} distance={d.distance}/>
    ))}
    </div>
  </div>
</section>  
    </div>
  )
}

export default page