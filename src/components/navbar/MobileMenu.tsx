import React from 'react'
import Wrapper from '../Wrapper'
import { NavLinks } from './NavLinks'
import Link from 'next/link'
import Button from '../button/Button'

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  return (
    <Wrapper classname='w-full mx-auto center-content'>
      <div className='w-full h-full fixed inset-0 z-10 backdrop-blur-sm' />
      <div className='fixed z-50 bottom-5 w-[85%] rounded-xl bg-light-grey h-[23rem]'>
        <div className="center-content relative flex-col gap-5 h-full">
          <div className="absolute top-5 w-15 bg-dark-grey h-2 rounded-full" />
          <ul className='flex flex-col space-y-3'>
            {NavLinks.map(({ name, href }) => (
              <li className='font-suisse-regular uppercase text-lg text-dark-grey bg-white px-3 py-2 rounded-sm center-content' key={name}>
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