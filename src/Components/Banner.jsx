import React from 'react'


const Banner = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full  bg-[url('/blurry-gradient.svg')] bg-center bg-cover gap-10    ">
      <div className='flex items-center justify-center flex-col gap-4'>
      <h1 className='font-poppins text-7xl font-extrabold   text-gray-500 max-[450px]:text-3xl' >
     Shop Now for <span className='text-white'>Fashion,</span> 
      </h1>
      
      <h1 className='font-poppins text-7xl font-extrabold  text-gray-500  max-[450px]:text-3xl'>
      Home, and More 
      </h1>
      </div>
      <button className='px-7 py-2 rounded-lg bg-light-dark-purple  text-white'>Explore Now!</button>
      

    </div>
  )
}

export default Banner
