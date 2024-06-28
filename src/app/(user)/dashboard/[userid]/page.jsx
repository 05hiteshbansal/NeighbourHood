 import React from 'react'
 import Image from 'next/image'
 const Page = () => {
   return (
     <div>
     <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 h-full mx-auto flex flex-wrap items-center ">
      <div className=' w-full lg:w-1/2 h-full  '>
      <Image alt="profile_pic" className="lg:w-4/5 w-full h-[500px]  object-cover object-center rounded" width={150} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQoPMpwA59IghJbA86TICSzgKga8PqdPxE30YdQISvA&s"/>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Know about your Neighbour </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">John</h1>
        <div className="flex mb-4">
          {/* <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span> */}
          {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
        </div>
        <p className="leading-relaxed">Dr. Elena Rivera stands as a beacon of compassion and expertise in the realm of medicine. With a career forged by years of rigorous training and clinical experience, she approaches each patient interaction with a blend of warmth and professionalism. Her gentle demeanor and attentive listening make her patients feel heard and valued from the moment they step into her office. Armed with a deep reservoir of medical knowledge and a commitment to staying abreast of the latest advancements, Dr. Rivera navigates complex diagnoses and treatment plans with precision and clarity. She is a staunch advocate for patient education, ensuring her patients understand their conditions and treatment options fully. Beyond the confines of her practice, Dr. Rivera dedicates herself to community health initiatives, volunteering her time to educate the public on preventive care and disease management. Her holistic approach to medicine extends beyond clinical treatment. she believes in empowering her patients to actively participate in their own health journeys. Dr. Rivera impact is felt not only through her medical expertise but also through the genuine connections she builds with each individual she cares for, making her a trusted and respected figure in her communities healthcare landscape. </p>
        
      </div>
    </div>
  </div>
</section>
     </div>
   )
 }
 
 export default Page