import BG from "@/assets/bg.jpg"
import InnovativeSolutions from "@/components/Innovative";
import Button from "@/components/shared/Button";
import HeroSlider from "@/components/Slider";
import { ArrowRight, Asterisk, Check, Clock, Headset, Leaf } from "lucide-react";
import Image from "next/image";


const checkmarkItems = [
    "Eco-Friendly Methods",
    "Resource Efficiency",
    "Higher Yields",
    "Farmer Empowerment",
    "Long-Term Growth"
  ];


export default function App() {
  return (
    <>
      <section className="w-full h-[calc(100vh)] p-2">
        <div className="w-full h-full rounded-2xl relative overflow-hidden">
          <div className="absolute w-full h-full bg-linear-to-t from-black via-black/50 to-black/30 -z-10"></div>
          <Image src={BG} alt="Banner" fill className="object-cover -z-20 select-none" loading="lazy" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col text-white">
          <h1 className="text-xs font-semibold uppercase mb-4">fresh farming towards steady growth</h1>
            <h1 className="text-[4rem] md:text-[8rem] leading-none font-marble">AgriNex</h1>
            <p className="mt-4 text-xs md:text-xl">Promoting fresh farming practices that ensure steady growth, <br className="hidden md:flex"/>sustainability, and lasting prosperity.</p>

            <div className="flex items-center justify-center mt-4 md:mt-12 gap-4">
              <Button className="w-fit bg-soft-white">get started</Button>

              <div className="hidden md:flex items-center gap-4 p-4 w-fit">
                {/* Overlapping Avatars Container */}
                <div className="flex -space-x-3">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                    alt="Farmer 1"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Farmer 2"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Farmer 3"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center items-start">
                  <span className="text-2xl font-semibold text-white tracking-tight leading-none mb-1">
                    50K+
                  </span>
                  <span className="text-sm text-white/80 leading-none">
                    Farms supported
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 w-full hidden lg:grid grid-cols-3 px-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full border border-white/60 bg-white/20 flex items-center justify-center">
                  <Headset className="text-white"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                  <span className="text-xl xl:text-2xl font-light font-marble text-white tracking-tight leading-none mb-1">
                    Market Access Support
                  </span>
                  <span className="text-xs xl:text-sm font-light text-white/60 leading-none">
                    Helping farmers reach wider range
                  </span>
                </div>
              </div>

              <div className="flex items-centerm justify-center border-x border-white gap-4">
                <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                  <Clock className="text-white"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                  <span className="text-xl xl:text-2xl font-light font-marble text-white tracking-tight leading-none mb-1">
                    Real-Time Analysis
                  </span>
                  <span className="text-xs xl:text-sm font-light text-white/60 leading-none">
                    Fresh innovations in agriculture boost
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <div className="size-14 rounded-full border border-white/60 bg-white/20 flex items-center justify-center">
                  <Leaf className="text-white"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                  <span className="text-xl xl:text-2xl font-light font-marble text-white tracking-tight leading-none mb-1">
                    Agri-Supply Solutions
                  </span>
                  <span className="text-xs xl:text-sm font-light text-white/60 leading-none">
                    Providing farmers essential tools
                  </span>
                </div>
              </div>
            </div>
        </div>
      </section>




      <section className="bg-white py-16 px-2 lg:px-8 font-sans">
        <div className="flex items-center gap-2 mb-6">
          <span className="size-8 rounded-full bg-primary flex items-center justify-center font-bold text-black select-none">
            <Asterisk size={22}/>
          </span>
          <span className="text-xl uppercase font-medium font-cottorway text-stone-800">
            ABOUT US
          </span>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image and Stats */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
            {/* Main Visual Asset */}
            <div className="w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://plus.unsplash.com/premium_photo-1743498183239-a5456de0b19c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Green agricultural fields under a bright blue sky" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold font-cottorway text-stone-900 tracking-tight">
                  193K+
                </h3>
                <p className="text-stone-500 mt-1 font-medium">
                  Farmers Empowered
                </p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold font-cottorway text-stone-900 tracking-tight">
                  250K+
                </h3>
                <p className="text-stone-500 mt-1 font-medium">
                  Acres Improved
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and CTA */}
          <div className="lg:col-span-8 lg:col-start-6 flex flex-col justify-between h-full lg:pt-2">
            <div>
              {/* Core Value Statement with Gray Text Highlights */}
              <h2 className="text-3xl md:text-4xl xl:text-[3.5rem] font-semibold leading-tight xl:leading-16 font-cottorway text-stone-900 tracking-tight">
                <span className="text-stone-900">AgriNex delivers advanced farming support with </span>
                <span className="text-stone-400">data-driven analysis, sustainable practices, </span> 
                <span>and reliable agricultural services.</span>
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-stone-600 text-sm md:text-lg font-medium leading-relaxed mt-6 max-w-3xl">
                AgriNex is a smart agricultural platform that empowers farmers with modern technology and innovative solutions. By combining real-time crop monitoring with advanced analytics, we help reduce risks, maximize yields, and drive sustainable, long-term growth.
              </p>
            </div>

            {/* Action Button */}
            <Button className="bg-black text-white w-fit mt-6">About Us</Button>
        </div>
      </div>
    </section>

    <InnovativeSolutions />





    <section className="py-6 px-2 lg:px-8">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-8 items-stretch">
        
        {/* Left Column: Header and Intro */}
        <div className="lg:col-span-4 flex flex-col justify-between py-2">
          <div>
            <div className="flex items-center gap-2 mb-6">
          <span className="size-8 rounded-full bg-primary flex items-center justify-center font-bold text-black select-none">
            <Asterisk size={22}/>
          </span>
          <span className="text-xl uppercase font-medium font-cottorway text-stone-800">
            OUR SOLUTIONS
          </span>
        </div>
            <h2 className="text-3xl md:text-4xl xl:text-[3.5rem] font-semibold leading-tight xl:leading-16 font-cottorway text-stone-900 tracking-tight">
              Innovative<br/>Agriculture Growth Solutions
            </h2>
            <p className="text-stone-600 text-sm md:text-lg font-medium leading-relaxed mt-6 max-w-3xl">
              Providing innovative farming solutions that boost productivity, ensure sustainability, and empower farmers.
            </p>
          </div>
          
          <div className="mt-8 xl:mt-0">
            <Button className="w-fit bg-black text-soft-white">Learn More</Button>
          </div>
        </div>

        {/* Middle Column: Smart Farming Tools Featured Card */}
        <div className="lg:col-span-4 relative rounded-3xl overflow-hidden aspect-square md:aspect-video xl:aspect-4/6 shadow-sm group">
          {/* Background Image Wrapper */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1619719826894-89d6c4fd5739?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Aerial view of farm lands and a windmill" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/40 mix-blend-multiply" />
          </div>

          {/* Content Overlays */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              {/* White Circle Icon container */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Asterisk className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>

              <h3 className="text-white text-2xl md:text-[1.75rem] font-semibold font-cottorway leading-tight tracking-wide mb-5">
                Innovative Smart Farming Tools For Maximizing Yields And Efficiency
              </h3>
              <p className="text-white/80 leading-relaxed font-light">
                Our smart farming tools integrate technology with sustainability, helping farmers optimize resources, increase yields, reduce waste, and achieve long-term agricultural growth.
              </p>
            </div>

            {/* Tags Container */}
            <div className="flex flex-wrap gap-2 pt-6">
              {['Time Efficiency', 'Data Insights', 'Precision'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-sm font-light text-white tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sustainable Agriculture Practices */}
        <div className="lg:col-span-4 flex flex-col justify-center py-2 px-6 xl:pr-0">
          <div>
            {/* Green Circle Icon container */}
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Asterisk className="w-6 h-6 text-black" strokeWidth={2.5} />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold font-cottorway leading-snug mb-6 tracking-wide">
              Sustainable Agriculture Practices Supporting Farmers Toward Strong Growth And Prosperity
            </h3>

            {/* Greenhouse Team Image */}
            <div className="rounded-2xl overflow-hidden mb-6 h-48 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" 
                alt="Farmers working inside a greenhouse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature Checklist */}
          <ul className="space-y-3.5">
            {checkmarkItems.map((item, index) => (
              <li key={index} className="flex items-center text-sm font-medium text-gray-700">
                <span className="mr-3 flex-shrink-0 text-black">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>


    <HeroSlider />
    </>
  );
}