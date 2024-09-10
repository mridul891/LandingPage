"use client"
import React from 'react'
import acmeLogo from '../assets/logo-acme.png'
import echoLogo from '../assets/logo-echo.png'
import celestialLogo from '../assets/logo-celestial.png'
import pulseLogo from '../assets/logo-pulse.png'
import apexLogo from '../assets/logo-apex.png'
import quantumLogo from '../assets/logo-quantum.png'
import Image from 'next/image'


const LogoTicker = () => {
    return (
        <div className='py-8 md:p-12 lg:px-[7rem] lg:py-12 bg-white'>
            <div className="container">
                <div className="flex overflow-hidden justify-center  [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-14 flex-none ">
                        <Image src={echoLogo} alt='echo logo' className='logo-ticker-image' />
                        <Image src={acmeLogo} alt='Acme logo' className='logo-ticker-image' />
                        <Image src={celestialLogo} alt='celestial logo' className='logo-ticker-image' />
                        <Image src={pulseLogo} alt='pulse logo' className='logo-ticker-image' />
                        <Image src={apexLogo} alt='Apex logo' className='logo-ticker-image' />
                        <Image src={quantumLogo} alt='quantum logo' className='logo-ticker-image' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogoTicker