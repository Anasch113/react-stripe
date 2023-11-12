import React from 'react'

const Navbar = () => {
  return (
    

  
     
     <ul className='flex flex-row w-full justify-around items-center mt-2'>
      <li className='text-3xl font-bold'>React-Stripe </li>

      <div className='flex flex-row items-center justify-center gap-7'>
        <li className='text-xl'>About</li>
       <button className='px-7 py-2 rounded-lg bg-purple-600 text-white'>Cart</button>
      </div>

     </ul>
     
   
  )
}

export default Navbar
