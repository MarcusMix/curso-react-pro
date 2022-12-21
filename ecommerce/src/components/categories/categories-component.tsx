import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

//Ultilities
import { fetchCategories } from '../../store/reducers/category/category.actions'

//Components
import CategoryItem from '../category-item/category-item.component'
import { useAppSelector } from '../../hooks/redux.hooks'
import Loading from '../loading/loading.components'

//Styles
import { CategoriesContainer, CategoriesContent } from './categories-styles'
import { CategoryContext } from '../../contexts/category.context'


const Categories = () => {

    const { isLoading, categories } = useAppSelector(state => state.categoryReducer)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCategories() as any)
    }, [])


    return (
        <CategoriesContainer>
            {isLoading && <Loading />}
            <CategoriesContent>
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}
            </CategoriesContent>
        </CategoriesContainer>
    )
}

export default Categories