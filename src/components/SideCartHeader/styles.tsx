import styled from 'styled-components'
import { BRAND_BLACK } from '../../constants/colors'

export const HeaderStyled = styled.header`
    position: sticky;
    display: flex;
    height: 98px;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Title = styled.h2`
    text-align: center;
    font-family: Recoleta;
    color: ${BRAND_BLACK};
    font-size: 32px;
    font-weight: 500;
    line-height: 34px;
`

export const Message = styled.span`
    width: 60%;
    text-align: center;
    font-family: 'Founders Grotesk Text';
    color: ${BRAND_BLACK};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
`
