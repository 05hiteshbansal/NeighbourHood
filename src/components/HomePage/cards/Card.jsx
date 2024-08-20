import Image from 'next/image'
import React from 'react'

const Card = ({imgurl , title , dis}) => {
  return (
    <>
        <section className="text-gray-600 flex items-center body-font min-w-[100vw] h-[100vh] ">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col justify-center items-center h-full w-full">
    <div className=" w-full h-full md:mb-0 flex items-center justify-center ">
      <Image  className=" rounded object-cover object-center h-full w-full aspect-square " alt="hero" src={imgurl}
         height={imgurl.height}
          width={imgurl.width}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-300">{title}
      </h1>
      <p className="mb-8 leading-relaxed font-medium text-stone-400">{dis}</p>
    </div>
  </div>
</section>
    </>
  )
}

export default Card