"use client"
import ArrowRight from '../assets/arrow-right.svg'
import cogImage from '../assets/cog.png'

import cylinderImage from '../assets/cylinder.png'
import noodleImage from '../assets/noodle.png'
import {motion ,useScroll,useTransform} from 'framer-motion'
import { useRef } from 'react'


export const Hero = () => {
    const heroRef= useRef(null)
    const { scrollYProgress } = useScroll({
         target : heroRef,
         offset:['start end' ,'end start']
    })
    const translateY = useTransform(scrollYProgress , [0,1] ,[150 ,-150]);

    return ( 
        <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-40 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip lg:px-20 ">
            <div className="px-5 lg:px-20">
                <div className="md:flex items-center lg:flex  lg:justify-between lg:gap-20  ">
                    <div className="md:w-[478px] lg:w-[600px] ">
                        <div className="tag">Version 2.0 is here</div>
                        <h1 className=" text-5xl md:text-7xl lg:text-[4.9rem]  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to Productivity</h1>
                        <p className="text-xl text-[#010d3e] tracking-tight mt-6 ">
                            Celebrate the joy of accomplishment with an app designed to track your progress , motivate your efforts . and celebrate your successes.
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                            <button className="btn btn-primary" >Get for free </button>
                            <button className="btn btn-text gap-1"><span>Learn More</span>
                                <ArrowRight className=" h-5 w-5" /></button>
                        </div>
                    </div>

                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
                        <motion.img
                            src={cogImage.src}
                            alt="cog Image"
                            height={400}
                            width={400}
                            className='pr-10 md:absolute md:h-full md:w-auto md: max-w-none md:-left-6 lg:left-0 ' 
                            animate={{
                                translateY:[-30,30]
                            }}
                            transition={{
                                repeat : Infinity,
                                repeatType :"mirror",
                                duration:3,
                                ease : "easeInOut"
                            }}
                            />
                        <motion.img
                            src={cylinderImage.src}
                            width={220}
                            height={220}
                            alt="cylinder image"
                            className="hidden md:block -top-8 -left-32 md:absolute" 
                            style ={{translateY : translateY}}
                            />

                        <motion.img
                            src={noodleImage.src}
                            width={220}
                            height={220}
                            alt="Noodle image"
                            className="hidden lg:block top-[524px] left-[448px] lg:rotate-[30deg] lg:absolute" 
                            style ={{translateY : translateY}}    
                        />
                    </div>
                </div>
            </div>
        </section>)
}