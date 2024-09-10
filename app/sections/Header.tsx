"use client"
import React from 'react'
import ArrowRight from '../assets/arrow-right.svg'
import Logo from '../assets/logosaas.png'
import Image from 'next/image'
import MenuIcon from '../assets/menu.svg'
const Header = () => {
  return (
    <header className='sticky top-0 '>
      <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
        <div className="inline-flex gap-1 items-center ">
          <p className = "text-white/60 hidden md:block "> Streamline your workflow and boost your productivity</p>
          <p>Get started For free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 ">
        <div className="" >
          <div className="flex items-center justify-between px-10 lg:gap-10">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5  text-black md:hidden " />
            <nav className="hidden md:flex  gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for Free </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header