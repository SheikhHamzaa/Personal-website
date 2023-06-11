import React from 'react'
import { FaFacebookF } from 'react-icons/Fa';
import { FaLinkedinIn } from 'react-icons/Fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image 
                    src={require("../../public/assets/My-dp.jpg")} 
                    alt="My photo"  
                    width={100} 
                    height={100} 
                    className="rounded-full w-[68px] h-[68px]"/>

                        <span className="ml-3 text-xl">SHEIKH HAMZA NADEEM AHMED</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2023 SHEIKH HAMZA

                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                        target="blank"
                        href={'https://www.facebook.com/hamza.nadeem.37201'} 
                        className="text-gray-500" >
                                <FaFacebookF className='text-3xl hover:text-[#1877F2]' />
                        </Link>
                        <Link
                        target="blank"
                         href={'https://www.linkedin.com/in/sheikh-hamza/'} className="ml-3 text-gray-500">
                            <FaLinkedinIn className='text-3xl hover:text-[#0077B5]' />
                            </Link>
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer