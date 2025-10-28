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
                        <Button variant='default' className=' bg-[#1A1A1A] mt-3 md:mt-10'>Get in touch</Button>
                        <div className="text-3xl md:text-5xl lg:text-6xl text-primary font-oswald font-bold mt-10 md:mt-10">Logo</div>
                    </div>
                    <div className="flex items-end justify-end flex-col text-primary mt-12 lg:mt-32">
                        <p className='text-3xl md:text-4xl lg:text-5xl font-oswald font-medium'>crafting narratives for digital voids.</p>
                        <div className="flex items-center justify-between w-full mt-10 gap-10 font-dm-mono text-sm text-dark-grey">
                            <div className="flex flex-col">
                                <span>Local time</span>
                                <span>16:34 GMT</span>
                            </div>
                            <span>&copy; Placeholder 2025</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer