import styled from 'styled-components'
import { Label } from '../Typography/styles'
import { LIGHT_SUNTAN, PERMANENT_RED, PURE_WHITE } from '../../constants/colors'

interface ProgressBarStyledProps {
    index: number
}

export const ProgressBarStyled = styled.progress<ProgressBarStyledProps>`
    appearance: none;
    height: 12px;
    border-radius: 100px;
    border: 3px solid ${PURE_WHITE};
    ${({ index }) => (index ? 'margin-left: -6px' : '')};
    ${({ index }) => (index >= 0 ? `z-index: ${5 - index}` : '')};

    &::-webkit-progress-bar {
        background-color: ${LIGHT_SUNTAN};
        border-radius: 100px;
    }

    &::-webkit-progress-value {
        background-color: ${PERMANENT_RED};
        border-radius: 100px;
        transition: width 0.1s;
    }
`

interface ProgressBarLabelProps {
    index: number
    count: number
    width?: number
}

export const ProgressBarLabel = styled(Label)<ProgressBarLabelProps>`
    position: absolute;
    top: 20px;
    left: ${({ index, count, width }) =>
        `calc(${100 / count}% * ${index + 1} - ${width ? Math.floor(width / 2) : 24}px)`};
    width: ${({ width }) => (width ? width : 48)}px;
    text-transform: uppercase;
    white-space: nowrap;
    transition: opacity 0.2s;
`
