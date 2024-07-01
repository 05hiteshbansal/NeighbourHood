import Image from 'next/image'
import React from 'react'
import loader from "@/media/g.gif"
const Loading = () => {
  return (
    <>
    <div className='flex min-w-screen min-h-screen m-auto justify-center items-center'>
      <Image src={loader} width={500} height={500} alt='loading'></Image>
    </div>
    </>
  )
}

export default Loading