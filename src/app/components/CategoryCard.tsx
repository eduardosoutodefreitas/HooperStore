import Image from 'next/image'
import Category from '../types/Category.types'
import Link from 'next/link'

interface CategoryCardProps {
  category: Category
}
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/explore/${category.id}`}
      className="h-[330px] min-w-[200px] flex-1 relative cursor-pointer  ">
      <Image
        src={category.imageUrl}
        fill
        className="brightness-75 rounded-md"
        alt={`${category.name} card`}
      />
      <h3 className="absolute z-10 text-white text-xl bottom-4 left-3">
        {category.displayName}
      </h3>
    </Link>
  )
}
