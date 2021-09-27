import { FC } from 'react'
import { ProductItemStyled } from './styles'

interface ProductItemProps {
    children: JSX.Element
}

const ProductItem: FC<ProductItemProps> = ({ children }) => {
    return <ProductItemStyled>{children}</ProductItemStyled>
}

export default ProductItem
