import React from 'react'
import { LayoutStyled } from './styles'

interface LayoutProps {
    children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <LayoutStyled>{children}</LayoutStyled>
}

export default Layout
