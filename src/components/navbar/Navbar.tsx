import Link from 'next/link'
import React from 'react'
import { NavLinks } from './NavLinks'
import Wrapper from '../Wrapper'
import Button from '../button/Button'

const Navbar = () => {
  return (
    <Wrapper>
      <nav className='w-full flex justify-between items-center h-28 px-6'>
        <div className="">
          <Link href="/">Logo</Link>
        </div>

        <div className="center-content">
          <ul className='space-x-7 hidden md:flex'>
            {NavLinks.map(({ name, href }) => (
              <li className='font-suisse-regular capitalize paragraph1' key={name}><Link href={href}>{name}</Link></li>
            ))}
          </ul>

          <div className="ml-24 hidden md:flex">
            <Button variant='default' classname='capitalize'><Link href="/get-in-touch">Get in touch</Link></Button>
          </div>

          <div className="flex md:hidden">
            menu
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}

export default Navbar