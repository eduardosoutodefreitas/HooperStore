import Category from '../types/Category.types'

const filterCategoryById = async (categories: Category[], id: string) => {
  const category = categories.find((category) => category.id === id)
  return category
}

export default filterCategoryById
