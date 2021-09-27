import styled from 'styled-components'
import { BRAND_BLACK } from '../../constants/colors'

interface TypographyStyledProps {
    weight?: number
    size?: number
    light?: boolean
}

export const Heading1 = styled.h1<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 32}px;
    line-height: ${({ size }) => (size ? size + 2 : 34)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Recoleta';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`

export const Heading2 = styled.h2<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 32}px;
    line-height: ${({ size }) => (size ? size + 2 : 34)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Recoleta';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`

export const Subtitle1 = styled.h3<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 18}px;
    line-height: ${({ size }) => (size ? size + 6 : 24)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Founders Grotesk';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`

export const Subtitle2 = styled.span<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 18}px;
    line-height: ${({ size }) => (size ? size + 6 : 24)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Founders Grotesk Text';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`

export const Body1 = styled.p<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 14}px;
    line-height: ${({ size }) => (size ? size + 4 : 18)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Founders Grotesk Text';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`

export const Body2 = styled.span<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 14}px;
    line-height: ${({ size }) => (size ? size + 4 : 18)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Founders Grotesk Text';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`

export const Label = styled.label<TypographyStyledProps>`
    color: ${BRAND_BLACK};
    text-align: center;
    font-size: ${({ size }) => size || 14}px;
    line-height: ${({ size }) => (size ? size + 4 : 18)}px;
    font-weight: ${({ weight }) => weight || 400};
    font-style: normal;
    font-family: 'Founders Grotesk Text';
    opacity: ${({ light }) => (light ? 0.7 : 100)};
`
