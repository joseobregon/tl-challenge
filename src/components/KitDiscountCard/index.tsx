import { FC } from 'react'
import { KitDiscountCardStyled } from './styles'

interface KitDiscountCardProps {
    children: JSX.Element
}

const KitDiscountCard: FC<KitDiscountCardProps> = ({ children }) => {
    return <KitDiscountCardStyled>{children}</KitDiscountCardStyled>
}

export default KitDiscountCard
