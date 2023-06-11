import React from 'react'
import Image from 'next/image'

const Project = () => {
    return (
        <div id='projects'className="bg-white">
            <section className="text-gray-600 body-font"/>
                <div className="container px-5 py-24 mx-auto" >
                    <div
                        className="flex flex-col text-center w-full mb-20"

                    >
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-5 -mt-16 mx-auto ml-[3rem]" >
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer" >
                            <div className="flex relative" >
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center "
                                    src={require("../../public/assets/Project-portfolio.png")}
                                />
                                <div
                                    className="px-8 py-10 relative z-10 w-full border-x-8 border-gray-200 bg-white opacity-0 hover:opacity-100"

                                >
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Porfolio Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        PORTFOLIO WEBSITE
                                    </h1>
                                    <p className="leading-relaxed">
                                    This is a project I created for those who want to showcase their portfolios.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                </div>
        



  )
}

export default Project