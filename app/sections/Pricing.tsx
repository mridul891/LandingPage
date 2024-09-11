"use client"
import CheckIcon from '../assets/check.svg'
import {twMerge} from 'tailwind-merge'
const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

export const Pricing = () => {
    return <section className="py-10 md:py-24 ">
        <div className="">
            <h2 className="section-title">Pricing</h2>
            <p className="section-description mt-4">Free forever. Upgrade for unlimited tasks, better security , and exclusive features.</p>

            <div className="flex flex-col  items-center gap-6 md:items-end mt-4 md:flex-row md:mx-10 lg:justify-center md:mt-10 ">
                {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => <div
                 key={title} 
                 className={twMerge("cards",inverse === true && "border-black bg-black text-white")}
                 >
                    <div className="flex justify-between items-center">

                        <h3 className={twMerge("text-lg font-bold text-black/50", inverse===true && "text-white" )}>{title}</h3>
                        {popular ? <div className="inline-flex text-sm px-3 py-1.5 rounded-xl border border-white/20 bg-black">
                            <span className="bg-gradient-to-r from-[#dd7ddf]  via-[#bbcb92] via-[#71c2ef] via-[#3bffff] to-[#dd7ddf]
 text-transparent bg-clip-text font-medium"> Most Popular</span>
                        </div> :""}
                       
                    </div>
                    <div className="flex items-baseline gap-1 mt-[30px]">
                        <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                        <span className="tracking-tighter font-bold text-black/50 ">/month</span>
                    </div>
                    <button className={twMerge("btn btn-primary w-full mt-[30px]",inverse===true && "bg-white text-black font-bold")}>{buttonText}</button>
                    <ul className="flex flex-col gap-5 mt-8">
                        {features.map((feature, index) => <li className="text-sm flex items-center gap-4 " key={index}>
                            <CheckIcon className="h-6 w-6" />
                            <span>{feature}</span>
                        </li>
                        )}
                    </ul>
                </div>
                )}
            </div>
        </div>
    </section>;
};
