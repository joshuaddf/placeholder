import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    variant: 'default' | 'small'
}

const buttonVariants = {
    default: 'bg-secondary small-text px-10 py-3 rounded-sm',
    small: 'bg-secondary large-text px-5 py-3 rounded-sm',
}

const Button: React.FC<ButtonProps> = ({ children, className='', variant }) => {
  return (
    <button className={twMerge(buttonVariants[variant], className)}>{children}</button>
  )
}

export default Button