import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    variant: 'default' | 'small'
}

const buttonVariants = {
    default: 'bg-secondary small-text px-8 py-2 rounded-xs font-medium',
    small: 'bg-secondary large-text px-5 py-3 rounded-xs',
}

const Button: React.FC<ButtonProps> = ({ children, className='', variant }) => {
  return (
    <button className={twMerge(buttonVariants[variant], className)}>{children}</button>
  )
}

export default Button