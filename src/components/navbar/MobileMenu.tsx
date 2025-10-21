import React, { useEffect } from 'react'
import Wrapper from '../Wrapper'
import { NavLinks } from './NavLinks'
import Link from 'next/link'
import Button from '../button/Button'

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <Wrapper classname='w-full mx-auto center-content'>
      {/* Overlay that closes menu when clicked */}
      <div
        className='w-full h-full fixed inset-0 z-40 backdrop-blur-sm'
        onClick={toggleMenu}
      />

      {/* The menu itself */}
      <div
        className='fixed z-50 bottom-5 w-[85%] rounded-xl bg-primary/[0.06] h-[23rem]'
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the menu
      >
        <div className="center-content relative flex-col gap-5 h-full">
          <div className="absolute top-5 w-15 bg-dark-grey h-2 rounded-full" />
          
          <ul className='flex flex-col space-y-3'>
            {NavLinks.map(({ name, href }) => (
              <li
                key={name}
                onClick={toggleMenu} // closes when you tap a link
                className='font-suisse-regular uppercase text-lg text-dark-grey bg-white px-3 py-2 rounded-sm center-content'
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>

          <Button variant='small'>Get in touch</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default MobileMenu
