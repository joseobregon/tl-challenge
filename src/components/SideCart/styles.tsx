import styled from 'styled-components'
import { PURE_WHITE } from '../../constants/colors'

export const SideCartStyled = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 448px;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${PURE_WHITE};
`

export const FlexTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
`
