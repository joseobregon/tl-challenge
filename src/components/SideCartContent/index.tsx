import { FC } from 'react'
import { SideCartContentStyled } from './styles'

interface ContentProps {
    children: JSX.Element
}

const SideCartContent: FC<ContentProps> = ({ children }) => {
    return <SideCartContentStyled>{children}</SideCartContentStyled>
}

export default SideCartContent
