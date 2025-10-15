import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    classname?: string
    variant: 'default' | 'small'
}

const buttonVariants = {
    default: 'bg-bg-secondary small-text px-10 py-2 rounded-full',
    small: 'bg-bg-secondary small-text px-3 py-1 rounded-full',
}

const Button: React.FC<ButtonProps> = ({ children, classname, variant }) => {
  return (
    <div className={`${buttonVariants[variant || 'default']} ${classname}`}>{children}</div>
  )
}

export default Button