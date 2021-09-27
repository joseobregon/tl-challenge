import React from 'react'
import { Heading1, Heading2, Subtitle1, Subtitle2, Body1, Body2, Label } from './styles'

interface TypographyProps {
    children: any
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'p'
        | 'span'
        | 'heading1'
        | 'heading2'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'label'
    weight?: number
    size?: number
    light?: boolean
}

const Typography: React.FC<TypographyProps> = ({ children, variant, weight, size }) => {
    switch (variant) {
        case 'h1':
        case 'heading1':
            return (
                <Heading1 weight={weight} size={size}>
                    {children}
                </Heading1>
            )
        case 'h2':
        case 'heading2':
            return (
                <Heading2 weight={weight} size={size}>
                    {children}
                </Heading2>
            )
        case 'h3':
        case 'subtitle1':
            return (
                <Subtitle1 weight={weight} size={size}>
                    {children}
                </Subtitle1>
            )
        case 'subtitle2':
            return (
                <Subtitle2 weight={weight} size={size}>
                    {children}
                </Subtitle2>
            )
        case 'p':
        case 'body1':
            return (
                <Body1 weight={weight} size={size}>
                    {children}
                </Body1>
            )
        case 'span':
        case 'body2':
            return (
                <Body2 weight={weight} size={size}>
                    {children}
                </Body2>
            )
        case 'label':
            return (
                <Label weight={weight} size={size}>
                    {children}
                </Label>
            )
        default:
            return (
                <Body2 weight={weight} size={size}>
                    {children}
                </Body2>
            )
    }
}

export default Typography
