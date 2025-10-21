import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    variant: 'default' | 'small'
}

const buttonVariants = {
    default: 'bg-secondary small-text px-10 py-2 rounded-sm',
    small: 'bg-secondary large-text px-5 py-2 rounded-sm',
}

const Button: React.FC<ButtonProps> = ({ children, className, variant }) => {
  return (
    <div className={`${buttonVariants[variant || 'default']} ${className} uppercase`}>{children}</div>
  )
}

export default Button