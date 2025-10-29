'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from './NavLinks'
import Wrapper from '../Wrapper'
import Button from '../button/Button'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <Wrapper>
        <nav className='w-full flex justify-between items-center h-18 md:h-28  z-50 relative'>
          <div className="bg-secondary px-5 py-2">
            <Link href="/">
              <Image
                src="/svg/placeholder-primary.svg"
                alt="Placeholder logo"
                width={200}
                height={200}
                sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px 200px"
                className="h-auto w-auto"
                priority
              />
            </Link>

          </div>

          <div className="center-content">
            <ul className='space-x-7 hidden md:flex'>
              {NavLinks.map(({ name, href }) => (
                <li className='font-suisse-regular capitalize paragraph1' key={name}><Link href={href}>{name}</Link></li>
              ))}
            </ul>
            <div className="ml-24 hidden md:flex">
              <Button variant='default'><Link href="/get-in-touch">Get in touch</Link></Button>
            </div>
            <div className="flex md:hidden">
              <span onClick={toggleMenu}>menu</span>
            </div>
          </div>
        </nav>

      </Wrapper>

      {isOpen && (
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      )}
    </>
  )
}

export default Navbar