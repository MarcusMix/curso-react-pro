import { FunctionComponent } from 'react'

//Ultilities
import Category from "../../types/category.types"
import { CategoryItemContainer, CategoryName } from './category-item'

//Styles
import './category-item.style.css'

interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
    return (
        <CategoryItemContainer backgroundImage={category.imageURL}>
            <CategoryName>
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    )
}

export default CategoryItem