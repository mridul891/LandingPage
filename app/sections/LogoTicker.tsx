"use client"
import React from 'react'
import acmeLogo from '../assets/logo-acme.png'
import echoLogo from '../assets/logo-echo.png'
import celestialLogo from '../assets/logo-celestial.png'
import pulseLogo from '../assets/logo-pulse.png'
import apexLogo from '../assets/logo-apex.png'
import quantumLogo from '../assets/logo-quantum.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const LogoTicker = () => {
    return (
        <div className='py-8 md:p-12 lg:px-[7rem] lg:py-12 bg-white'>
            <div className="">
                <div className="max-w-[540px] mx-auto lg:max-w-[1400px]">

                    <div className="flex overflow-hidden justify-center [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                        <motion.div className="flex gap-5 pr-14 md:gap-14 lg:gap-14 flex-none " animate={{ translateX: "-50%" }} transition={{ duration: 20 ,repeat:Infinity,ease:"linear",repeatType:"loop" }}>
                            <Image src={echoLogo} alt='echo logo' className='logo-ticker-image' />
                            <Image src={acmeLogo} alt='Acme logo' className='logo-ticker-image' />
                            <Image src={celestialLogo} alt='celestial logo' className='logo-ticker-image' />
                            <Image src={pulseLogo} alt='pulse logo' className='logo-ticker-image' />
                            <Image src={apexLogo} alt='Apex logo' className='logo-ticker-image' />
                            <Image src={quantumLogo} alt='quantum logo' className='logo-ticker-image' />
                            {/* second set of logo */}
                            <Image src={echoLogo} alt='echo logo' className='logo-ticker-image' />
                            <Image src={acmeLogo} alt='Acme logo' className='logo-ticker-image' />
                            <Image src={celestialLogo} alt='celestial logo' className='logo-ticker-image' />
                            <Image src={pulseLogo} alt='pulse logo' className='logo-ticker-image' />
                            <Image src={apexLogo} alt='Apex logo' className='logo-ticker-image' />
                            <Image src={quantumLogo} alt='quantum logo' className='logo-ticker-image' />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogoTicker