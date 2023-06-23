import CartProduct from '../types/CartItem'
import ValidateItems from '../utils/validateCart'
interface CheckoutButtonProps {
  cart: CartProduct[]
  children: React.ReactNode
}

const CheckoutButton = ({ cart, children }: CheckoutButtonProps) => {
  const handleCheckoutClick = async () => {
    const validatedItems = await ValidateItems(cart)
    const response = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify(validatedItems)
    })
    const data = await response.json()
    window.location.href = data.url
  }
  return (
    <button
      className="w-full self-center bg-primary text-white px-2 py-1 rounded-md"
      onClick={handleCheckoutClick}>
      {children}
    </button>
  )
}

export default CheckoutButton
