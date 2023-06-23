'use client'

import { CgClose } from 'react-icons/cg'
import { useCartStore } from '../store/cart'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'

const Cart = () => {
  const { cart, cartTotal, showCart, toggleCart } = useCartStore()
  const handleCartClick = () => {
    toggleCart(showCart)
  }
  return (
    <div
      className={`${showCart === true ? 'visible' : 'hidden'} ${
        showCart === true ? 'opacity-100' : 'opacity-0'
      } h-screen w-screen fixed inset-0 flex z-50`}>
      <div
        className="w-2/3 bg-black/10 smartphone:hidden"
        onClick={handleCartClick}></div>
      <div className="w-1/3 min-w-[400px] smartphone:min-w-[270px] smartphone:w-full p-5 flex flex-col justify-between items-start bg-white text-primary">
        {cart.length === 0 ? (
          <div className="w-full flex justify-between items-center">
            <h2 className="text-2xl font-bold smartphone:text-xl">
              Seu carrinho está vazio
            </h2>
            <CgClose
              className="hidden smartphone:inline"
              size={25}
              onClick={handleCartClick}
            />
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between items-center">
              <h2 className="text-2xl font-bold smartphone:text-xl">
                Seu carrinho
              </h2>
              <CgClose
                className="hidden smartphone:inline-block"
                size={25}
                onClick={handleCartClick}
              />
            </div>

            <div className="h-4/6 w-full overflow-x-auto">
              {cart.map((cartItem) => (
                <CartItem product={cartItem} key={cartItem.id} />
              ))}
            </div>
            <p>Total: R${cartTotal.toFixed(2)}</p>
            <CheckoutButton cart={cart}>Checkout</CheckoutButton>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
