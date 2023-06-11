import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FiDownload } from 'react-icons/Fi';


const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-white z-50">
            <header className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-centerx text-gray-900 mb-4 md:mb-0">
        <Image src={require("../../public/assets/My-dp.jpg")} alt="My photo"  width={100} height={100} className="rounded-full w-[68px] h-[68px] ml-3"/>
      <span className="ml-3 my-6 text-sm italic font-bold">SHEIKH HAMZA NADEEM AHMED</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-8 hover:text-blue-600 font-serif hover:underline" href={"/"}>Home</Link>
      <Link className="mr-8 hover:text-blue-600 font-serif hover:underline" href={"#about"}>About</Link>
      <Link className="mr-8 hover:text-blue-600 font-serif hover:underline" href={"#Skills"}>Skills</Link>
      <Link className="mr-8 hover:text-blue-600 font-serif hover:underline" href={"#projects"}>Projects</Link> 
      <Link className="mr-8 hover:text-blue-600 font-serif hover:underline" href={"#contact"}>Contact</Link> 
    </nav>
      <a href="/assets/MyCV.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hover:underline ">
      Download CV
      <FiDownload className="text-xl ml-2"/>
    </button>
      </a>
  </div>
  <div className="'w-[500px] h-[1px] bg-slate-950">

  </div>
</header>
        </div>
    )
}

export default Navbar 