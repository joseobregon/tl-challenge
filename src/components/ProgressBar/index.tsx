import React from 'react'
import { ProgressBarStyled, ProgressBarLabel } from './styles'

interface ProgressBarProps {
    index: number
    max: number
    value: number
    label: string
    highlightLabel?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ index, max, value, label, highlightLabel }) => {
    return (
        <>
            <ProgressBarStyled
                id={`progress-${index}`}
                max={max}
                value={value}
                index={index}
                role="progressbar"
                aria-label={`Progress bar ${label}`}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
            />
            <ProgressBarLabel
                htmlFor={`progress-${index}`}
                size={11}
                weight={500}
                light={!highlightLabel}
                index={index}
                count={4}
            >
                {label}
            </ProgressBarLabel>
        </>
    )
}

export default ProgressBar
