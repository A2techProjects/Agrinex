'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import Button from '@/components/shared/Button';
import { Asterisk } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const TIMER_DURATION = 4000;

interface TabItem {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

const TAB_DATA: TabItem[] = [
  {
    id: 1,
    label: 'EXPERT',
    title: 'Expert Guidance',
    description: 'Professional advice for farming success.',
    image:
      'https://plus.unsplash.com/premium_photo-1661420226112-311050ce30da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    label: 'SMART',
    title: 'Smart Farming',
    description:
      'Data-driven insights and automated precision tracking.',
    image:
      'https://images.unsplash.com/photo-1627920768905-575535d6dd2e?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    label: 'TRUSTED',
    title: 'Trusted Solutions',
    description:
      'Reliable tools backed by years of agricultural expertise.',
    image:
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    label: 'SUSTAINABLE',
    title: 'Sustainable Growth',
    description:
      'Eco-friendly methodologies designed for future generations.',
    image:
      'https://images.unsplash.com/photo-1618158807378-35769f30af82?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    label: 'QUALITY',
    title: 'Quality Assurance',
    description:
      'Rigorous standards ensuring top-tier crop yield outcomes.',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    label: 'MARKET',
    title: 'Market Access',
    description:
      'Seamless integration connecting your farm directly to buyers.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
  },
];

const CX = 700;
const CY = 700;
const RADIUS = 640;
const NODE_R = 11;
const RING_R = 22;

const CIRCUMFERENCE = 2 * Math.PI * RING_R;
const SVG_W = CX * 2;
const SVG_VISIBLE_H = RADIUS - 200;

export default function InnovativeSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spokeGroupRef = useRef<SVGGElement>(null);
  const activeLineRef = useRef<SVGLineElement>(null);

  const globalAngleRef = useRef(0);
  const animationProxy = useRef({ angleValue: 0 });
  const lineTargetIdxRef = useRef(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);
  const progressProxy = useRef({ value: 0 });

  const [mobileProgress, setMobileProgress] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useGSAP({ scope: containerRef });

  const getNodeCoords = (nodeIndex: number, angle: number) => {
    const rad = ((nodeIndex * 60 + angle) * Math.PI) / 180;

    return {
      x: CX + Math.sin(rad) * RADIUS,
      y: CY - Math.cos(rad) * RADIUS,
    };
  };

  const syncActiveLine = (angle: number) => {
    if (!activeLineRef.current) return;

    const { x, y } = getNodeCoords(
      lineTargetIdxRef.current,
      angle
    );

    activeLineRef.current.setAttribute('x1', String(x));
    activeLineRef.current.setAttribute('y1', String(y));
  };

  const updateNodePositions = (angle: number) => {
    containerRef.current
      ?.querySelectorAll('.math-node')
      .forEach((node) => {
        const init = parseFloat(
          node.getAttribute('data-initial-angle') || '0'
        );

        const rad = ((init + angle) * Math.PI) / 180;

        node.setAttribute(
          'transform',
          `translate(${CX + Math.sin(rad) * RADIUS},${
            CY - Math.cos(rad) * RADIUS
          })`
        );
      });

    spokeGroupRef.current?.setAttribute(
      'transform',
      `rotate(${angle} ${CX} ${CY})`
    );

    syncActiveLine(angle);
  };

  const startProgressArc = () => {
    progressTweenRef.current?.kill();

    progressProxy.current.value = 0;

    setProgress(0);

    progressTweenRef.current = gsap.to(progressProxy.current, {
      value: 1,
      duration: TIMER_DURATION / 1000,
      ease: 'none',
      onUpdate: () =>
        setProgress(progressProxy.current.value),
    });
  };

  const cancelTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    progressTweenRef.current?.kill();
  };

  // ✅ FIXED VERSION
  const handleTabChange = useCallback(
    (targetIndex: number, currentIndex: number) => {
      if (targetIndex === currentIndex) return;

      let angleDiff =
        ((targetIndex - currentIndex) * -60) % 360;

      if (angleDiff > 180) angleDiff -= 360;
      if (angleDiff < -180) angleDiff += 360;

      globalAngleRef.current += angleDiff;

      setActiveIndex(targetIndex);

      const tl = gsap.timeline();

      tl.to(cardRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.97,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => setDisplayIndex(targetIndex),
      });

      tl.to(
        activeLineRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power1.in',
        },
        '<'
      );

      tl.to(
        animationProxy.current,
        {
          angleValue: globalAngleRef.current,
          duration: 1.4,
          ease: 'power4.inOut',
          onUpdate: () =>
            updateNodePositions(
              animationProxy.current.angleValue
            ),
          onComplete: () => {
            lineTargetIdxRef.current = targetIndex;

            syncActiveLine(globalAngleRef.current);
          },
        },
        '-=0.15'
      );

      tl.to(
        activeLineRef.current,
        {
          opacity: 0.85,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.2'
      );

      tl.to(
        cardRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: 'power3.out',
        },
        '<'
      );
    },
    []
  );

  const scheduleNext = (currentIndex: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    startProgressArc();

    timerRef.current = setTimeout(() => {
      const next =
        (currentIndex + 1) % TAB_DATA.length;

      handleTabChange(next, currentIndex);

      scheduleNext(next);
    }, TIMER_DURATION);
  };

  const handleManualChange = (idx: number) => {
    cancelTimer();

    handleTabChange(idx, activeIndex);

    scheduleNext(idx);
  };

  useEffect(() => {
    updateNodePositions(0);

    activeLineRef.current?.setAttribute(
      'x1',
      String(CX)
    );

    activeLineRef.current?.setAttribute(
      'y1',
      String(CY - RADIUS)
    );

    activeLineRef.current?.setAttribute(
      'x2',
      String(CX)
    );

    activeLineRef.current?.setAttribute(
      'y2',
      String(CY)
    );

    scheduleNext(0);

    return () => cancelTimer();
  }, []);

  const dashOffset =
    CIRCUMFERENCE * (1 - progress);

  const currentCard = TAB_DATA[displayIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#F4F4F2] text-[#111111] px-2 lg:px-8 pt-12 md:pt-16 overflow-hidden"
    >
      {/* ── Header ── */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 relative z-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="size-8 rounded-full bg-primary flex items-center justify-center font-bold text-black select-none">
              <Asterisk size={22}/>
            </span>
            <span className="text-xl uppercase font-medium font-cottorway text-stone-800">
              WHY CHOOSE US?
            </span>
          </div>
          <h2 className="text-4xl xl:text-6xl font-semibold font-cottorway tracking-tight text-neutral-900 leading-none">
            Practical and <span className="text-stone-400">smart <br/> innovation</span> for every farmer.
          </h2>
          <p className="text-stone-600 text-sm md:text-lg font-medium leading-relaxed mt-6 max-w-3xl">
            Providing farmers with smart, sustainable solutions that enhance productivity, and ensure long-term growth.
          </p>
        </div>

        {/* Tab bar — hidden on mobile */}
        <div className="hidden xl:flex bg-white rounded-full p-1.5 shadow-sm border border-neutral-100 items-center gap-1 scrollbar-none self-start lg:self-end">
          {TAB_DATA.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => handleManualChange(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-300 whitespace-nowrap ${
                activeIndex === idx ? 'bg-black text-white' : 'text-neutral-500 hover:text-black cursor-pointer'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: Circle + Card ── */}
      <div
        className="hidden xl:block relative w-full overflow-visible"
        style={{ paddingBottom: `${(SVG_VISIBLE_H / SVG_W) * 100}%`, marginTop: "56px" }}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 ${CY - RADIUS} ${SVG_W} ${SVG_VISIBLE_H}`}
          preserveAspectRatio="xMidYMin meet"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <clipPath id="spoke-clip">
              <circle cx={CX} cy={CY} r={RADIUS} />
            </clipPath>
          </defs>

          {/* Background spokes */}
          <g clipPath="url(#spoke-clip)">
            <g ref={spokeGroupRef}>
              {[...Array(24)].map((_, i) => (
                <line key={i}
                  x1={CX} y1={CY - RADIUS} x2={CX} y2={CY + RADIUS}
                  stroke="#E2E2E2" strokeWidth="1"
                  transform={`rotate(${i * 15} ${CX} ${CY})`}
                />
              ))}
            </g>
          </g>

          {/* Active spoke */}
          <line
            ref={activeLineRef}
            x1={CX} y1={CY - RADIUS} x2={CX} y2={CY}
            stroke="#111111" strokeWidth="1.6" opacity="0.85"
          />

          {/* Circle rings */}
          <circle cx={CX} cy={CY} r={RADIUS}     fill="none" stroke="#E2E2E2" strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r={RADIUS + 6} fill="none" stroke="#E2E2E2" strokeWidth="0.7" strokeDasharray="4 6" opacity="0.65" />

          {/* Nodes */}
          <g style={{ pointerEvents: 'auto' }}>
            {TAB_DATA.map((tab, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <g
                  key={tab.id}
                  className="math-node"
                  data-initial-angle={idx * 60}
                  onClick={() => handleManualChange(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Number label */}
                  <text
                    x="0" y="-36"
                    textAnchor="middle" dominantBaseline="central"
                    style={{ fontSize: 15, fontWeight: 600, fill: '#444' }}
                  >
                    {tab.id}
                  </text>

                  {/* Progress ring — only on active node */}
                  {isCurrent && (
                    <>
                      {/* Static track ring */}
                      <circle
                        cx="0" cy="0" r={RING_R}
                        fill="none"
                        stroke="#D0D0D0"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                      {/* Animated fill arc */}
                      <circle
                        cx="0" cy="0" r={RING_R}
                        fill="none"
                        stroke="#15B000"
                        strokeWidth="2"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        transform="rotate(-90 0 0)"
                      />
                    </>
                  )}

                  {/* Inner dot */}
                  <circle
                    cx="0" cy="0" r={NODE_R}
                    fill={isCurrent ? '#15B000' : '#FFFFFF'}
                    stroke={isCurrent ? '#15B000' : '#C0C0BC'}
                    strokeWidth="1.5"
                  />
                  {isCurrent && <circle cx="0" cy="0" r="4" fill="#000" />}
                </g>
              );
            })}
          </g>
        </svg>

        {/* Card */}
        <div
  ref={cardRef}
  className="
    absolute
    z-10
    left-1/2
    -translate-x-1/2
    max-[1680px]:top-[12%]
    top-[16%]

    max-[1680px]:w-[320px]
    w-[520px]

    p-4

    rounded-2xl
    bg-white
    border border-neutral-100
    shadow-[0_20px_60px_rgba(0,0,0,0.07)]
  "
>
          <div className="text-center mb-3">
            <h3 className="text-2xl font-semibold font-marble tracking-tight text-neutral-900">{currentCard.title}</h3>
            <p className="text-black/60 text-xs mt-1 px-3 leading-relaxed">{currentCard.description}</p>
          </div>
          <div className="relative rounded-[12px] overflow-hidden bg-neutral-100 group mb-3">
            <img
              src={currentCard.image} alt={currentCard.title}
              className="w-full aspect-video object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="w-fit px-4 py-2 bg-black text-white text-sm lg:text-base font-medium font-marble uppercase rounded-full cursor-pointer">Learn More</button>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Swiper ── */}
      <div className="xl:hidden pb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: TIMER_DURATION, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 12 },
            600: { slidesPerView: 1.4, spaceBetween: 12 },
            740: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 2.6, spaceBetween: 12 }
          }}
          loop
          speed={600}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => {
            setMobileActive(swiper.realIndex);
            setMobileProgress(0);
          }}
          onAutoplayTimeLeft={(_swiper, _time, percentage) => {
            setMobileProgress(1 - percentage);
          }}
        >
          {TAB_DATA.map((tab) => (
            <SwiperSlide key={tab.id}>
              <div className="bg-white rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-neutral-100">
                <div className="text-center mb-3">
                  <h3 className="text-xl font-semibold font-marble tracking-tight text-neutral-900">{tab.title}</h3>
                  <p className="text-black/60 text-xs mt-1 px-3 leading-relaxed">{tab.description}</p>
                </div>
                <div className="relative rounded-[12px] overflow-hidden bg-neutral-100 group mb-3">
                  <img
                    src={tab.image} alt={tab.title}
                    className="w-full aspect-video object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="w-fit px-4 py-2 bg-black text-white font-medium font-marble uppercase rounded-full">Learn More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile progress bar + dots */}
        <div className="mt-5 px-1">
          <div className="flex items-center justify-center gap-2 mb-3">
            {TAB_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`rounded-full transition-all duration-300 ${
                  mobileActive === idx ? 'w-6 h-2 bg-black' : 'w-2 h-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>

          <div className="w-full h-[3px] bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-none"
              style={{ width: `${mobileProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}