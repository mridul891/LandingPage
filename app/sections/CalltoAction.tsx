import starImage from '../assets/star.png'
import springImage from '../assets/spring.png'
import Image from 'next/image'
import ArrowRight from '../assets/arrow-right.svg'
const CalltoAction = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
            <div className="">
                <div className="section-heading relative">
                    <div>
                        <h2 className="section-title">Sign up For Free Today</h2>
                        <p className="section-description mt-5 z-10">Celebrate the joy of accoplishment with an app designed tp track your progress and  motivate your efforts.</p>
                    </div>

                    <Image src={starImage} alt="Star Image" width={360} className="hidden md:block md:absolute lg:left-[2px] md:-top-[60px] md:-left-[200px]" />
                    <Image src={springImage} alt="spring Image" width={360} className="hidden md:block absolute lg:-right-[100px] lg:-top-[25px] md:-right-[200px] md:-top-[10px]" />
                </div>
                <div className="flex justify-center  mt-10">
                    <button className="btn btn-primary">Get for free</button>
                    <button className="btn btn-text gap-1">
                        <span>Learn more</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CalltoAction