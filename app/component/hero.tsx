"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        <div className='ml-10'>
                        I am
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Web Application Developer.', 'UI/UX Designer.', 'Graphic Designer.'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'text-red-500',
                                cursorClassName: 'text-blue-500', // Apply the cursor color utility class
                            }} />
                            </div>
                    </h1>
                    <div className='ml-10'>
                    <div className='w-[100px] h-[3px] bg-blue-800'></div>
                    <p className="mb-8 leading-relaxed">
                        A Web Application Developer.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"#contact"}>
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-30">
                            Contact
                        </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <Image className='w-[15rem] object-cover object-center rounded mx-auto' src={require("../../public/assets/my-photoblack.png")}
                        width={500}
                        height={500}
                        alt={'My Picture'} />
                </div>
            </div>
        </section>
    )
}

export default Hero