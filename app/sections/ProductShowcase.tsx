"use client"
import React from 'react'
import productImage from "../assets/product-image.png"
import pyramidImage from "../assets/pyramid.png"
import TubeImage from "../assets/tube.png"
import Image from "next/image"
const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 px-1 overflow-x-clip">
            <div className="">
                <div className="max-w-[540px] mx-auto">

                    <div className="flex justify-center">
                        <div className="tag">Boost your Productivity</div>
                    </div>
                    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5 ">A more effective way to track progress</h2>
                    <p className="text-center text-[20px] font-semibold leading-[30px] tracking-tighter text-[#010D3E] mt-5">Effortlessly turn your ideas into a fully functional , responsive, SaaS  Websites in just minutes with this template</p>

                </div>
                <div className="relative">

                    <Image src={productImage} alt="Program Image " className="mt-10" />
                    <Image src={pyramidImage} alt="pyramid Image" height={262} width={262} className="hidden md:block absolute -right-32 -top-32" />
                    <Image src={TubeImage} alt="Tube Image" height={248} width={248} className="hidden md:block absolute bottom-24 -left-32" />
                </div>
            </div>

        </section>
    )
}

export default ProductShowcase