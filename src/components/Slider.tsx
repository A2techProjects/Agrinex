"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Button from "@/components/shared/Button";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    title: "Building A Sustainable Future Together",
    description:
      "FarmaVista Agriculture, we connect farmers with resources, knowledge, and markets to ensure lasting prosperity.",
    stats: [
      {
        value: "180K+",
        label: "Farmers Supported",
        width: "70%",
      },
      {
        value: "250K+",
        label: "Acres Cultivated",
        width: "100%",
      },
      {
        value: "95%",
        label: "Positive Impact",
        width: "80%",
      },
    ],
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
    title: "Empowering Farmers With Innovation",
    description:
      "Using modern agricultural technology and sustainable methods to maximize production and profitability.",
    stats: [
      {
        value: "120K+",
        label: "Smart Farms",
        width: "65%",
      },
      {
        value: "300K+",
        label: "Crop Production",
        width: "95%",
      },
      {
        value: "90%",
        label: "Farmer Satisfaction",
        width: "75%",
      },
    ],
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
    title: "Connecting Agriculture To The Future",
    description:
      "We bridge the gap between local farmers and global markets through digital transformation.",
    stats: [
      {
        value: "85K+",
        label: "Connected Markets",
        width: "60%",
      },
      {
        value: "410K+",
        label: "Organic Products",
        width: "100%",
      },
      {
        value: "98%",
        label: "Growth Success",
        width: "82%",
      },
    ],
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1600&auto=format&fit=crop",
    title: "Growing Communities Through Farming",
    description:
      "Supporting rural communities with resources, education, and access to sustainable opportunities.",
    stats: [
      {
        value: "200K+",
        label: "Families Impacted",
        width: "78%",
      },
      {
        value: "500K+",
        label: "Acres Managed",
        width: "100%",
      },
      {
        value: "96%",
        label: "Eco Sustainability",
        width: "85%",
      },
    ],
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden py-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        speed={1200}
        observer
        observeParents
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="h-full"
      >
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full">
                {/* Background */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Main Content */}
                <div className="relative z-10 flex h-full flex-col justify-between px-5 py-6 md:px-12 md:py-10">
                  {/* Top Counter */}
                  <div className="text-3xl font-light text-white md:text-5xl">
                    0{index + 1}/0{slides.length}
                  </div>

                  {/* Middle */}
                  <div className="my-24 md:my-36 grid items-end gap-10 md:grid-cols-2">
                    {/* Left */}
                    <div className="max-w-2xl">
                      <h1
                        className={`max-w-xl font-cottorway text-4xl font-semibold leading-tight text-white transition-all duration-1000 md:text-6xl ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-16 opacity-0"
                        }`}
                      >
                        {slide.title}
                      </h1>

                      <p
                        className={`mt-5 max-w-lg text-sm leading-7 text-white/85 transition-all duration-1000 delay-150 md:text-lg ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        {slide.description}
                      </p>

                      {/* Animated Button */}
                      <div
                        className={`transition-all duration-1000 delay-300 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <Button className="mt-6 bg-soft-white text-black hover:translate-x-2 transition-transform duration-300">
                          Get Started
                        </Button>
                      </div>
                    </div>

                    {/* Right Stats */}
                    <div className="flex flex-col gap-3 md:items-end">
                      {slide.stats.map((stat, i) => (
                        <div
                          key={i}
                          className={`flex h-[52px] w-full items-center bg-white px-4 text-black shadow-lg transition-all duration-1000 md:w-auto ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "translate-x-20 opacity-0"
                          }`}
                          style={{
                            width: stat.width,
                            transitionDelay: `${i * 150}ms`,
                          }}
                        >
                          <span className="font-cottorway text-lg font-bold">
                            {stat.value}
                          </span>

                          <span className="ml-3 text-sm md:text-lg">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center gap-4">
                    {/* Progress */}
                    <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-white/30">
                      <div
                        key={activeIndex}
                        className={`h-full origin-left bg-white ${
                          isActive ? "animate-progress" : ""
                        }`}
                      />
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-3">
                      <button className="hero-prev flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                        <ArrowLeft />
                      </button>

                      <button className="hero-next flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-primary">
                        <ArrowRight className="text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Progress Animation */}
      <style jsx global>{`
        .animate-progress {
          transform-origin: left;
          animation: progress 5s linear forwards;
        }

        @keyframes progress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}