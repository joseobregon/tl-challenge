import { FC } from 'react'
import { ListItemsStyled } from './styles'

interface ListItemsProps {
    children: JSX.Element
}

const ListItems: FC<ListItemsProps> = ({ children }) => {
    return <ListItemsStyled>{children}</ListItemsStyled>
}

export default ListItems
