import CartProduct from '../types/CartItem'

const ValidateItems = async (cart: CartProduct[]) => {
  const validatedItems = cart.map((cartItem) => ({
    price_data: {
      currency: 'brl',
      product_data: {
        name: cartItem.name
      },
      unit_amount: parseFloat(`${cartItem.price.toString().replace('.', '')}0`)
    },
    quantity: cartItem.quantity
  }))
  return validatedItems
}

export default ValidateItems
