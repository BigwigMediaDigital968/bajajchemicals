"use client";
import Navbar from "./components/Navbar";
import hero from "./assets/hero.png";
import Image from "next/image";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import ButtonFill from "./components/ButtonFill";
import ProductsSection from "./components/Products";
import LatestBlogSection from "./components/Blogs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingActions from "./components/FloatingActions";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] lg:h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Chemical & Detergent Manufacturing"
            className="w-full h-full object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-11/12 md:w-5/6 mx-auto text-white">
            <p
              data-aos="fade-up"
              className="uppercase tracking-widest text-sm text-[var(--primary)] mb-4"
            >
              Lorem ipsum dolor sit amet.
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Lorem ipsum dolor, sit <br /> amet consectetur adipisicing.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-xl text-gray-200 mb-8"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              perspiciatis ipsum, eos atque tenetur tempora illum inventore
              fugit pariatur. Recusandae nulla consequatur necessitatibus quam
              incidunt!
            </p>
            <div data-aos="zoom-in" data-aos-delay="300">
              <ButtonFill
                text="Explore Products"
                href="/products"
                className="w-[170px]"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <ProductsSection />
      <Testimonial />
      <LatestBlogSection />
      <FloatingActions />
      <Footer />
    </>
  );
}
