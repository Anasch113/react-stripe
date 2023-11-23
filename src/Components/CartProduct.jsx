import React from 'react'
import { useContext } from 'react'
import { productFind } from '../products'
import { CartContext } from '../CartContext'
const CartProduct = (props) => {


    const id = props.id;
    const quantity = props.quantity;

    const cart = useContext(CartContext);
    const productData = productFind(id)

   // Check if productData is available before accessing its properties
  const title = productData ? productData.title : 'Product Title';
  const price = productData ? productData.price : 'Product Price';
    

  return (
    <div className='flex flex-col items-start justify-center gap-3 border-b-2 border-gray-200'>
   
   <h2 className='text-gray-500  text-2xl'>{title}</h2>
   <h3 className='text-gray-500 text-2xl '>{price}</h3>
      <h2>Quantity : {quantity}</h2>
      
      <button onClick={() => cart.deleteFromCart(id)} className='px-3 py-2 bg-red-500 text-white rounded-xl  '> Remove </button>
<hr />
    </div>
  
  )
}

export default CartProduct
