import React from 'react'
import Button from '../button/Button'
import Wrapper from '../Wrapper'

const Footer = () => {
    return (
        <footer className='bg-secondary w-full'>
            <Wrapper classname='py-10 flex items-center justify-center'>
                <div className="flex items-center justify-between md:flex-row flex-col w-full gap-6">
                    <div className="md:w-1/2 items-start flex flex-col gap-6">
                        <p className='text-primary font-oswald text-5xl md:text-6xl lg:text-7xl font-bold'>Ready to start something?</p>
                        <Button variant='default' className=' bg-[#1A1A1A] mt-16'>Get in touch</Button>
                    </div>
                    <div className=""></div>
                </div>
                <div className="bg-red-500">

                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer