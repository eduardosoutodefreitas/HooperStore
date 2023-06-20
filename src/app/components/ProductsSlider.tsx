'use client'
import Product from '../types/Product.types'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import ProductCard from './ProductCard'

import { Autoplay } from 'swiper'

interface ProductsSliderProps {
  slideProducts: Product[]
}

const ProductsSlider = ({ slideProducts }: ProductsSliderProps) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      breakpoints={{
        446: {
          slidesPerView: 1,
          spaceBetween: -30
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        880: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1128: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1556: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
      spaceBetween={20}
      className="mySwiper">
      {slideProducts.map((product) => (
        <SwiperSlide>
          <ProductCard product={product} key={product.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductsSlider
