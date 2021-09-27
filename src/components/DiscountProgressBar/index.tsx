import { FC } from 'react'
import ProgressBar from '../ProgressBar'
import { DiscountProgressBarStyled } from './styles'

interface DiscountProgressBarProps {
    subtotal: number
    discounts: number[]
}

const DiscountProgressBar: FC<DiscountProgressBarProps> = ({ subtotal, discounts }) => {
    return (
        <DiscountProgressBarStyled>
            {discounts.map((item, index, arr) => {
                const val =
                    subtotal >= arr[index] ? 100 : subtotal > (arr[index - 1] || 0) ? (subtotal * 100) / item : 0
                return (
                    <ProgressBar
                        key={`progress-${item}`}
                        max={100}
                        value={val}
                        label={`${item} OFF`}
                        index={index}
                        highlightLabel={subtotal >= arr[index] && (!arr[index + 1] || subtotal < arr[index + 1])}
                    />
                )
            })}
        </DiscountProgressBarStyled>
    )
}

export default DiscountProgressBar
