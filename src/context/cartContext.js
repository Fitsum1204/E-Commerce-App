import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems,productToAdd)=>{

const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

if(existingCartItem) {
    return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1}:cartItem)
}
//return md caroitems  new cart item
return [...cartItems,{...productToAdd,quantity:1}]
}
const removeCartItem = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1 ){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity - 1}:cartItem) 
}

const clearCartItem =(cartItems,cartItemToClear) =>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen:false,
    setISCartOpen:()=>{},
    cartItems:[],
    addItemToCart:() =>{},
    removeItemToCart:() =>{},
    clearItemFromCart:() =>{},
    setCount:()=>{},
    cartTotal:0

})

export const CartProvider = ({children})=>{
    const [isCartOpen,setISCartOpen] = useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [count,setCount] =useState(0);
    const [cartTotal,setCartTotal] = useState(0)

    useEffect(()=>{
       const newCartTotal =cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price,0);
       setCartTotal(newCartTotal)
    },[cartItems])

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
        setCount(count + 1);
    }
    const removeItemToCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
        setCount(count - 1);
    }
    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToClear));
        setCount(0);
    }
    const value ={isCartOpen,setISCartOpen,cartItems,addItemToCart,count,removeItemToCart,clearItemFromCart,cartTotal}
    return ( <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
            
    )
}