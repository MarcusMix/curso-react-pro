import { FunctionComponent } from 'react'

//Ultilities
import Category from "../../types/category.types"

//Styles
import './category-item.style.css'

interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
    return (
        <div className="category-item-container"
            style={{ backgroundImage: `url('{category.imageURL}')` }}>
            <div className="category-name">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
    )
}

export default CategoryItem