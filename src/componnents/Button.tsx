import {
    styled,
    // css,
    // globalCss,
    // keyframes,
    // theme,
    // createTheme,
    // getCssText,
} from '../../stitches.config';
import React from 'react';

const StyledButton = styled('button',
    {
        backgroundColor: 'gainsboro',
        color: '#575757',
        borderRadius: '16px',
        fontSize: '13px',
        padding: '10px 15px',
        border: 'none',
        minWidth: 132,
        '&:hover': {
            backgroundColor: 'lightgray',
        },
        variants: {
            outlined: {
                true: {
                    border: '1px solid blue'
                },
                false: {
                    border: 'none'
                }
            },
            color: {
                primary: {
                    background: '$blue500',
                    color: 'white',
                    "&:hover": {
                        background: 'black'
                    }
                },
                secondary: {
                    background: 'lightblue',
                    color: 'Beige'
                }
            },
            size: {
                sm: {
                    height: 24,
                    borderRadius: 4,
                    padding: 1
                },
                md: {
                    height: 32,
                    borderRadius: 12,
                    padding: 2
                },
                lg: {
                    height: 48,
                    borderRadius: 16
                }
            }
        },
        compoundVariants: [
            {
                color: 'primary',
                size: 'sm',
                css: {
                    height: 100,
                    background: 'LightBlue'
                }
            }
        ],
        defaultVariants: {
            color: 'secondary',
            size: 'md',
            outlined: false
        }
    }
)

export const Button = (props: React.ComponentProps<typeof StyledButton>) => {
    const { ...rest } = props
    return (
        <StyledButton {...rest} />)
}

export default Button