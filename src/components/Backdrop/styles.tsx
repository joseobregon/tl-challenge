import styled from 'styled-components'
import { BRAND_BLACK } from '../../constants/colors'

export const BackdropStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${BRAND_BLACK};
    opacity: 0.6;
    transition: opacity 0.2s linear 0s;
`
