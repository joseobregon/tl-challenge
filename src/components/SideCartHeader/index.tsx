import { FC } from 'react'
import Typography from '../Typography'
import { HeaderStyled } from './styles'

interface HeaderProps {
    title: string
    message1: string
    message2: string
}

const SideCartHeader: FC<HeaderProps> = ({ title, message1, message2 }) => {
    return (
        <HeaderStyled>
            <Typography variant="heading2">{title}</Typography>
            <Typography variant="body1">{message1}</Typography>
            <Typography variant="body1" weight={700}>
                {message2}
            </Typography>
        </HeaderStyled>
    )
}

export default SideCartHeader
