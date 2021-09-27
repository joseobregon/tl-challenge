import { FC } from 'react'
import { KitDiscountCardContentStyled } from './styles'

interface KitDiscountCardContentProps {
    children: JSX.Element
}

const KitDiscountCardContent: FC<KitDiscountCardContentProps> = ({ children }) => {
    return <KitDiscountCardContentStyled>{children}</KitDiscountCardContentStyled>
}

export default KitDiscountCardContent
