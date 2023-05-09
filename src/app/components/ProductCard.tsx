import { BsCartPlusFill } from "react-icons/bs"
import Product from "../types/Product.types"
import Image from 'next/image'
import { useCartStore } from "../store/cart"

interface ProductCard {
    product:Product
}
const ProductCard = ({product}:ProductCard) => {
  const {addToCart} = useCartStore()
  const handleAddCartClick = () => {
    addToCart(product)
  } 
  return (
    <div className="min-w-[250px] h-[400px] max-w-[300px] flex flex-col flex-1 shadow-sm">
      <div className="relative w-full h-4/5 rounded-sm">
        <Image src={product.imageUrl} alt={`Product ${product.id} Image`} fill className="rounded-t-sm"/>
      </div>
      <div className="flex justify-between px-1">
        <div>
           <p className="font-semibold my-2">
            {product.name}
        </p>
        <span className="font-ligth inline-block text-lg">
            R${product.price}
        </span>
        <span className="font-ligth inline-block text-primary/70 line-through text-sm ml-1">
            R${product.oldPrice}
        </span>
        </div>
        <div className="flex flex-col items-end">
        <BsCartPlusFill color="Black" size={22} className="mt-2 mb-3 cursor-pointer" onClick={handleAddCartClick}/> 
        <span className="p-1 px-2 rounded-3xl bg-primary text-white font-semibold text-xs">{product.tag}</span>
        </div>
       
      </div>
        

    </div>
    
  )
}

export default ProductCard