import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import { Pricing } from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase"
import { Testimonial } from "./sections/Testimonial"
import  CalltoAction  from "./sections/CalltoAction"
export default function Home() {
  return (<>
    <Header />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <Pricing />
    <Testimonial />
    <CalltoAction/>
  </>);
}
