const productsArray = [
    {
        title : "Wireless Earbuds",
        price : '14.99',
        desc : 'High quality wireless earbuds at very low price.',
        id: '1'
    },
    {
        title : "Headphones",
        price : '19.99',
        desc : 'Buy premium quality headphones at very low price',
        id: '2'
    },
    {
        title : "Speaker",
        price : '24.99',
        desc : 'Get speaker with loud & clear voice ',
        id: '3'
    }
]

const productFind = (id)=>{
    const productsList = productsArray.find((product)=> product.id === id)
} 
export {productsArray, productFind}