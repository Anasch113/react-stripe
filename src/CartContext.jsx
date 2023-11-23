import { createContext, useState} from 'react';
import { productsArray, productFind } from './products';





export const CartContext = createContext({

items : [],

getProductQuantity : ()=>{},
addOneToCart: ()=>{},
removeOneFromCart: ()=>{},
deleteFromCart : ()=>{},
getTotalCost: ()=>{}

});




export function CartProvider({children}){


    const [cartProducts, setCartProducts] = useState([]);
  


   
    

//function to get quantity my love
const getProductQuantity = (id)=>{
    const quantity = cartProducts.find(product=> product.id === id)?.quantity;

    if(quantity === undefined){
        return 0;
    }
  return quantity;

}



// function to add products in cart

const addOneToCart = (id)=>{
const quantity  = getProductQuantity(id)

if (quantity === 0){ //product is not in cart

    setCartProducts(
        [
            ...cartProducts , 
            {id:id, quantity:1}
            
        ]
        )
      
    }
    else{  //product is in cart 

        // (if same product added then quantity increases otherwise new product added)
        setCartProducts(
            cartProducts.map(
                product =>
                product.id === id?
                {...product, quantity: product.quantity + 1} :
                product
            )
        )
        
        

    }
    
}




//function to remove the product on quantity basis

const removeOneFromCart = (id)=>{
const quantity = getProductQuantity(id);
if (quantity === 1){
    deleteFromCart(id)
}

else{
       // (delete the one from quantity if quantity is more than one)
       setCartProducts(
        cartProducts.map(
            product =>
            product.id === id?
            {...product, quantity: product.quantity - 1} :
            product
        )
    )
   
}

}




// function to delete the product from cart
const deleteFromCart = (id)=>{
setCartProducts(
    cartProducts=>
    cartProducts.filter(currentProduct => {
        return currentProduct.id !== id
    })
)

} 


// function to calculate the total cost of product
const getTotalCost = ()=>{
    let totalCost = 0;
    cartProducts.map((cartItem)=>{
const productsData = productFind(cartItem.id)
totalCost += (productsData.price * cartItem.quantity)
    })
    return totalCost;
}


// importing values
const contextValue = {
items: cartProducts,
getProductQuantity ,
addOneToCart,
removeOneFromCart,
deleteFromCart,
getTotalCost,

}

return (
    <CartContext.Provider value={contextValue} >

        {children}
    </CartContext.Provider>
)


}
export default CartProvider;