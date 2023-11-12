import React from 'react'
import {Modal} from 'react-bootstrap'
import { useState } from 'react'
const Navbar = () => {

  const [show, setShow]= useState(false);
  const handleClose = ()=>{
    setShow(false)
  }
  const handleShow = ()=>{
    setShow(true)
  }
  return (
    
<>
  
     
     <ul className='flex flex-row w-full justify-around items-center mt-2'>
      <li className='text-3xl font-bold'>React-Stripe </li>

      <div className='flex flex-row items-center justify-center gap-7'>
        <li className='text-xl'>About</li>
       <button onClick={handleShow} className='px-7 py-2 rounded-lg bg-light-dark-purple  text-white'>Cart</button>
      </div>

     </ul>
     <Modal show = {show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>
  Shopping Cart
</Modal.Title>
</Modal.Header>
<Modal.Body>
<h1>This is modal body</h1>
</Modal.Body>
     </Modal>
     
     </>
  )
}

export default Navbar
