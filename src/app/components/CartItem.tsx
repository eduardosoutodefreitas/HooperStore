'use client'
import Image from 'next/image'
import CartProduct from '../types/CartItem'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import { useCartStore } from '../store/cart'

interface CartItemProps {
  product: CartProduct
}
const CartItem = ({ product }: CartItemProps) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore()
  const handleRemoveButtonClick = () => {
    removeFromCart(product.id)
  }
  const handleIncreaseButtonClick = () => {
    increaseQuantity(product.id)
  }
  const handleDecreaseButtonClick = () => {
    decreaseQuantity(product.id)
  }
  return (
    <div className="flex items-center justify-between p-3 gap-2 shadow mb-5 min-w-[180px]">
      <Image
        src={product.imageUrl}
        alt={`${product.name} image`}
        width={130}
        height={150}
        className="smartphone:w-1/3"
      />
      <div>
        <h3 className="smartphone:text-sm">{product.name}</h3>
        <div className="flex items-center gap-1">
          <BiMinus
            size={12}
            className="cursor-pointer"
            onClick={handleDecreaseButtonClick}
          />
          <span>{product.quantity}</span>
          <BiPlus
            size={12}
            className="cursor-pointer"
            onClick={handleIncreaseButtonClick}
          />
          <h4 className="ml-2 text-sm">R${product.price}</h4>
        </div>
      </div>
      <IoCloseSharp
        size={22}
        className="cursor-pointer self-start text-end w-20"
        onClick={handleRemoveButtonClick}
      />
    </div>
  )
}

export default CartItem
