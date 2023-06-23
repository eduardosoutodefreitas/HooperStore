import Image from 'next/image'
import Category from '../types/Category.types'

interface CategoryCardProps {
  category: Category
}
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="h-[330px] w-3/6 hover:w-3/4 mt-5 transition-all duration-300 relative cursor-pointer  ">
      <Image
        src={category.imageUrl}
        fill
        className="brightness-75 rounded-md"
        alt={`${category.name} card`}
      />
      <h3 className="absolute z-10 text-white text-xl bottom-4 left-3">
        {category.displayName}
      </h3>
    </div>
  )
}
