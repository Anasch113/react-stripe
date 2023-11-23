import React from 'react'
import {Modal} from 'react-bootstrap'
import { useState, useContext } from 'react'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'



const Navbar = () => {
const cart = useContext(CartContext)

const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);



  const [show, setShow]= useState(false);
  const handleClose = ()=>{
    setShow(false)
  }
  const handleShow = ()=>{
    setShow(true)
  }

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
        
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
}

  return (
    
<>
  
     
     <ul className='flex flex-row w-full justify-around items-center mt-2'>
     <li className='text-2xl font-poppins  text-gray-600 font-semibold'>E-Business </li>

      <div className='flex flex-row items-center justify-center gap-7'>
        <li className='text-xl'>About</li>
       <button onClick={handleShow} className='px-7 py-2 rounded-lg bg-light-dark-purple  text-white'>Cart({productsCount} ) </button>
      </div>

     </ul>
     <Modal show = {show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>
  Shopping Cart
</Modal.Title>
</Modal.Header>
<Modal.Body>
  {
    productsCount > 0 ?
    <>
<h1 className=' w-full flex  justify-center text-2xl mb-10'>Items In Your Cart</h1>
    
{
     cart.items.map((currentProduct, index)=>(
    <CartProduct key ={index} id={currentProduct.id} quantity = {currentProduct.quantity} />
  ))
}
<div className='flex flex-col items-start justify-center gap-6'>



<h1 className=' text-3xl font-bold'>Total : $ {cart.getTotalCost().toFixed(2)}</h1>

<button onClick={checkout} className='px-7 py-2 rounded-lg bg-light-dark-purple  text-white'>Purchase!</button>
</div>
    
    </> :
    
    <p>There is no item in your cart</p>
  }


</Modal.Body>
     </Modal>
     
     </>
  )
}

export default Navbar
