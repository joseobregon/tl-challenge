import { FC } from 'react'
import { KitDiscountCardFooterStyled } from './styles'

interface KitDiscountCardFooterProps {
    children: JSX.Element
}

const KitDiscountCardFooter: FC<KitDiscountCardFooterProps> = ({ children }) => {
    return <KitDiscountCardFooterStyled>{children}</KitDiscountCardFooterStyled>
}

export default KitDiscountCardFooter
