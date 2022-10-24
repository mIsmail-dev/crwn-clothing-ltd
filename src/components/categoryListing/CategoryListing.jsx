import CategoryItem from '../category-item/CategoryItem'
import './CategoryListing.scss'

const CategoryListing = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryListing