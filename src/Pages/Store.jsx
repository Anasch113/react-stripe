import React from 'react'
import { productsArray } from '../products'
const Store = () => {
  return (
    <div className='box-border w-full px-0 py-0 '>
<div className='flex flex-col items-center justify-center gap-4 mt-10'>


<h1 className='text-4xl font-semibold text-gray-500' >Order Your Favourite Items</h1>

      <div className='flex flex-row justify-evenly gap-4'>
      {
productsArray.map((item, index)=>(
  
<div key={index} className='flex flex-col px-5 py-5 w-96 h-96 rounded-md bg-white gap-5 shadow-xl'>
 
 <h2> Name: {item.title}</h2>
 <h4> Price: {item.price}</h4>
 <p> Description: {item.desc}</p>
 <button className='px-7 py-2 rounded-lg bg-light-dark-purple  text-white'>Buy</button>
 </div>
))
  }

      </div>
      </div>
    </div>
  )
}

export default Store
