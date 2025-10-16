import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    classname?: string
    variant: 'default' | 'small'
}

const buttonVariants = {
    default: 'bg-secondary small-text px-10 py-2 rounded-full',
    small: 'bg-secondary large-text px-5 py-2 rounded-full',
}

const Button: React.FC<ButtonProps> = ({ children, classname, variant }) => {
  return (
    <div className={`${buttonVariants[variant || 'default']} ${classname}`}>{children}</div>
  )
}

export default Button