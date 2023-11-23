import earbuds from "/Simple-Product-Buds-5.png"
import speaker from "/Home-Category-1-Party-Speaker.png"
import headphones from "/Home-Banner.png"
import headphones2 from "/headphone-1.png"
import watch from "/Simple-Product-Watch-2.png"
import earbuds2 from "/Simple-Product-Buds-7.png"

const productsArray = [
    {
        title : "Immortal 700",


       
        price : "34.99",
        desc : "Gaming Headphone with 7.1 Channel, 50mm drivers, RGB LED Modes, ENxTM Technology ",
        id: "price_1OFGw5Du31qa5LszFw4G5rPV",
        imgSrc : headphones
    },
    {
        title : "Airdopes Atom 83 ",
        price : "39.99",
        desc : "True Wireless Earbuds with up to 50 Hours Playtime, Quad Mics with ENx™ Technology, 13mm Drivers, BEAST™ Mode, ASAP™ Charge  ",
        id: "price_1OFGxBDu31qa5LszrMBhTZVl",
        imgSrc : earbuds
    },

    {
        title : "Wave Call 2 ",

       
        price : "99.99",
        desc : "Smartwatch with Bluetooth Calling, 1.83 (4.64cm) HD Display, 700+ Active Modes, 1000+ Watch Faces, Crest OS+",

       
        id: "price_1OFGyDDu31qa5Lsz12qXctyU",
        imgSrc : watch
    },

    {
        title : "Wireless Earbuds ",
        price : "14.99",
        desc : "High quality wireless earbuds at very low price",
        id: "price_1OEuafDu31qa5LszTDkDVRW9",
        imgSrc : earbuds2
    },
    {
        title : "Headphones",
        price : "19.99",
        desc : "Buy premium quality headphones at very low price",
        id: "price_1OEuchDu31qa5Lszr1zj634i",
        imgSrc : headphones2

    },
    {
        title : "Speaker",
        price : "24.99",
        desc : "Get speaker of high quality with loud & clear voice and bluetooth support. ",
        id: "price_1OEugvDu31qa5Lszj7nodpRx",
        imgSrc : speaker
    }
    
]

function productFind (id){
    let productsList = productsArray.find(product=> product.id === id);
    if(productsList == undefined){
        console.log("Product doesn't exists", id)
        return undefined;
    }
    return productsList;
} 
export {productsArray, productFind}