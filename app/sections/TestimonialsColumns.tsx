import Image from 'next/image'
import React from 'react'
import {twMerge} from "tailwind-merge"


const TestimonialsColumns = (props: { className?: string; testimonial: typeof testimonials }, index: Number) => {
    return (
        <div className={twMerge("flex flex-col items-center mt-10 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",props.className)} >
            {props.testimonial.map(({ text, imageSrc, name, username }, index) => (
                <div className="cards" key={index}>
                    <div>{text} </div>
                    <div className="flex items-center gap-2 mt-5">
                        <Image
                            src={imageSrc}
                            alt={name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="flex flex-col">
                            <div className="font-medium tracking-tighter leading-5">{name}</div>
                            <div className="leading-5 tracking-tight">{username}</div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TestimonialsColumns