import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion';
const testimonials = [

    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: " avatar1.src",
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: "avatar2.src",
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: " avatar3.src",
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: "avatar4.src",
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: "avatar5.src",
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: "avatar6.src",
        name: "Riley Smith",
        username: "@rileysmith1",
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: " avatar7.src",
        name: "Jordan Patels",
        username: "@jpatelsdesign",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: " avatar8.src",
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: "avatar9.src",
        name: "Casey Harper",
        username: "@casey09",
    },
];

const TestimonialsColumns = (props: { className?: string; testimonial: typeof testimonials }) => {
    return (
        <div className={props.className}>
            <motion.div animate={{translateY: "-50%"}}
                transition={{ duration:10,repeat: Infinity, ease: "linear", repeatType: "loop"}}
                className="flex flex-col items-center gap-6 " >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
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
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    )
}

export default TestimonialsColumns