import { styled } from "@stitches/react"

const StyledInput = styled('input', {
    height: '36px',
    color: '#575757',
    borderRadius: '8px',
    fontSize: '1.2rem',
    border: 'none',
    variants: {
        color: {
            info: {
                background: '#f1f2ff'
            },
            success: {
                background: 'lightgreen'
            },
            error: {
                background: 'red'
            }
        },
        size: {
            small: {
                height: '24px'
            },
            medium: {
                height: '36px'
            },
            large: {
                height: '48px'
            }
        }
    },
    defaultVariants: {
        size: 'medium',
        color: 'info'
    }
})

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const { ...rest } = props
    return (
        <StyledInput
            type={props.type}
            placeholder={props.placeholder}
            name={props.placeholder}
            value={props.value}
            {...rest}
        />
    )
}