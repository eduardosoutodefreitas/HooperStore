import CartProduct from "@/app/types/CartItem";
import Product from "@/app/types/Product.types"
import { create } from "zustand"

export interface StoreProps {
    showCart:boolean
    cartTotal:number
    cart: CartProduct[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId:string) => void
    decreaseQuantity: (productId:string) => void
    toggleCart: (visible:boolean) => void;
}

export const useCartStore = create<StoreProps>((set, get)=>({
    cart:[],
    cartTotal:0,
    showCart:false,
    addToCart:(product) => {
        const cart = get().cart;
        const findProduct = cart.find(p => p.id === product.id);
        if (findProduct) {
            findProduct.quantity! += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        const cartTotal = get().cartTotal + product.price;
       set({cart, cartTotal});
    },
    removeFromCart: (productId)  => {
        const cart = get().cart.filter((product) => product.id !== productId);
        const cartTotal = cart.reduce((total, product) => total + product.price * product.quantity!, 0);
        set({ cart, cartTotal });
    },
    increaseQuantity: (productId) => {
        const cart = get().cart;
        const findProduct = cart.find(product => product.id === productId);
        if (findProduct) {
            findProduct.quantity += 1;
        }
        const cartTotal = get().cartTotal + findProduct!.price;
        set({ cart, cartTotal });
    },
    decreaseQuantity: (productId) => {
        const cart = get().cart;
        const findProduct = cart.find((product) => product.id === productId);
        if (findProduct) {
            findProduct.quantity = findProduct.quantity > 1 ? findProduct.quantity - 1 : findProduct.quantity;
        }
        const cartTotal = get().cartTotal - findProduct!.price;
        set({ cart, cartTotal });
    },
    toggleCart:(visible) => {
        set({ showCart: !visible })
    }

}))