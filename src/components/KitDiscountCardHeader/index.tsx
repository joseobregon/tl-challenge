import { FC } from 'react'
import { KitDiscountCardHeaderStyled } from './styles'

interface KitDiscountCardHeaderProps {
    children: JSX.Element
}

const KitDiscountCardHeader: FC<KitDiscountCardHeaderProps> = ({ children }) => {
    return <KitDiscountCardHeaderStyled>{children}</KitDiscountCardHeaderStyled>
}

export default KitDiscountCardHeader
