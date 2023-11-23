import React from 'react'
import { productsArray } from '../products'
import ProductCard from '../Components/ProductCard'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'



const Store = () => {

  
  return (
    <div className='box-border w-full px-0 py-0 '>
<div className='flex flex-col items-center justify-center gap-4 mt-10'>

<Banner/>
<h1 className='text-4xl font-semibold text-gray-500' >Welcome To Store!</h1>

    

    <div className='flex flex-row items-center justify-center gap-5 flex-wrap'>

  
      {
productsArray.map(( product, index)=>(

<div className='flex flex-row items-center justify-center gap-4' key={index}>
  
<ProductCard key={index} product= {product}/>
</div>
))
  }
    </div>
 </div>
 <Footer/>
      </div>
    
    
  )
}

export default Store
