'use client'
import { useMemo } from "react"
import { useCartStore } from "../store/cart"
import CartItem from "./CartItem"

const Cart = () => {
const {cart, cartTotal, showCart, toggleCart} = useCartStore()
  const handleCartClick = () => {
    toggleCart(showCart)
  }  
return (
    <div className={`${showCart === true ? 'visible' : 'hidden'} ${showCart === true ? 'opacity-100' : 'opacity-0'} h-screen w-screen fixed inset-0 flex`}>
      <div className="w-3/4 bg-black/10" onClick={handleCartClick}>
      </div> 
      <div className="w-1/4 px-3 py-5 flex flex-col justify-between items-start bg-white text-primary">
      {cart.length === 0 ? <p>Seu carrinho está vazio.</p> : (
        <>
        <h2 className="text-2xl font-bold">Seu carrinho</h2>
        <div className="h-4/6 overflow-x-auto">
          {cart.map((cartItem) =>(
             <CartItem product={cartItem} key={cartItem.id}/>
          ))}
        </div>
        <p>Total: R${cartTotal.toFixed(2)}</p>
        <button className="w-full bg-primary text-white px-2 py-1 rounded-md">Checkout</button>
        </>
        
      )}
      </div>
    </div>

  )
}

export default Cart