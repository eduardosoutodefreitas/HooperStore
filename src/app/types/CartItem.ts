import Product from "./Product.types";

export default interface CartProduct extends Product {
 quantity: number;
}