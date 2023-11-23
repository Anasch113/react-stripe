import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
const ProductCard = (props) => {
    const product = props.product;

    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);




    return (




        <div className='flex flex-col px-5 py-5 w-96 min-h-full rounded-md bg-white gap-3 shadow-xl'>
             <img className='w-48' src={product.imgSrc} alt="img" />
            <h2 className='text-gray-500 text-2xl'>  {product.title}</h2>
            <h4 className='text-gray-700 text-xl'> Price: ${product.price} </h4>
            <p className='text-gray-600 '>  {product.desc}</p>

            {
                productQuantity > 0 ?
                    <div className='flex flex-col items-center justify-center w-full gap-4'>

                        <div className='flex flex-row items-center justify-between w-full'>
                            <h3> In Cart: {productQuantity}</h3>

                            <div className='flex flex-row items-center space-x-4'>
                                <button className='px-3 py-1 bg-gray-100 rounded-xl align-middle hover:bg-gray-200 ' onClick={() => cart.addOneToCart(product.id)} >+</button>
                                <button className='px-3 py-1 bg-gray-100 rounded-xl align-middle hover:bg-gray-200 ' onClick={() => cart.removeOneFromCart(product.id)} >-</button>
                            </div>

                        </div>


                        <button onClick={() => cart.deleteFromCart(product.id)} className='px-7 py-2 rounded-lg bg-red-500  text-white '>Remove From Cart</button>



                    </div> :
                    <button onClick={() => cart.addOneToCart(product.id)} className='px-7 py-2 rounded-lg bg-light-dark-purple  text-white'>Add To Cart</button>
            }

        </div>




    )
}

export default ProductCard
