import React from 'react'

interface WrapperProps {
    children: React.ReactNode
    classname?: string
}

const Wrapper = ({ children, classname }: WrapperProps) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-6 ${classname}`}>{children}</div>
  )
}

export default Wrapper