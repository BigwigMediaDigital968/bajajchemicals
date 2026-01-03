"use client";

import Navbar from "./components/Navbar";
import hero1 from "./assets/1.png";
import hero2 from "./assets/2.png";
import hero3 from "./assets/3.png";
import hero4 from "./assets/4.png";
import Image from "next/image";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import ButtonFill from "./components/ButtonFill";
import ProductsSection from "./components/Products";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatWeDoSection from "./components/WhatWeDo";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- HERO DATA ---------------- */
const heroSlides = [
  {
    image: hero4,
    tag: "A trusted hand to 1.5 Million+ Families",
    title: (
      <>
        Bajaj Chemical – Powering <br /> Cleanliness for Over 45 Years
      </>
    ),
    desc: "Trusted manufacturer of LABSA and high-quality detergent products, serving industries and households with consistent performance, purity, and reliability since four decades.",
    cta: { text: "Explore Products", href: "/chemicals" },
  },
  {
    image: hero2,
    tag: "Quality You Can Rely On",
    title: (
      <>
        Manufacturing Excellence <br /> Backed by Innovation
      </>
    ),
    desc: "Advanced manufacturing processes and stringent quality control ensure reliable chemical solutions for detergent and industrial applications.",
    cta: { text: "Explore Products", href: "/detergents" },
  },
  {
    image: hero3,
    tag: "Serving Industries Nationwide",
    title: (
      <>
        Consistent Supply. <br /> Proven Performance.
      </>
    ),
    desc: "Supporting FMCG brands and industrial partners with scalable production, timely delivery, and uncompromised standards.",
    cta: { text: "Explore Products", href: "/chemicals" },
  },
  {
    image: hero1,
    tag: "Decades of Industry Trust",
    title: (
      <>
        Reliable Manufacturing. <br /> Proven Results.
      </>
    ),
    desc: "Delivering consistent quality and dependable supply to partners across India with a legacy built on trust.",
    cta: { text: "Explore Products", href: "/detergents" },
  },
];

/* ---------------- COMPONENT ---------------- */
export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* AOS INIT */
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  /* CONTROLS */
  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] pt-16 lg:h-screen overflow-hidden">
        {/* SLIDES */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeSlide].image}
              alt="Bajaj Chemical"
              className="w-full h-full object-fill"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-11/12 md:w-5/6 mx-auto text-white">
            <p
              data-aos="fade-up"
              className="uppercase tracking-widest text-sm text-[var(--primary)] mb-4"
            >
              {heroSlides[activeSlide].tag}
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              {heroSlides[activeSlide].title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-xl text-gray-200 mb-8"
            >
              {heroSlides[activeSlide].desc}
            </p>

            <div data-aos="zoom-in" data-aos-delay="300">
              <ButtonFill
                text={heroSlides[activeSlide].cta.text}
                href={heroSlides[activeSlide].cta.href}
                className="w-[170px]"
              />
            </div>
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white text-2xl flex items-center justify-center hover:bg-white/30 transition"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white text-2xl flex items-center justify-center hover:bg-white/30 transition"
        >
          ›
        </button>
      </section>

      <AboutSection />
      <WhatWeDoSection />
      <ProductsSection />
      <Testimonial />
      <Footer />
    </>
  );
}
