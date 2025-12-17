"use client";
import Image from "next/image";
import imgSmall from "../assets/about-img-1.jpg";
import imgLarge from "../assets/about-img-2.jpg";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "./ButtonFill";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="pt-12 bg-white relative overflow-hidden">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {/* LEFT SIDE – IMAGE COMPOSITION */}
        <div className="relative w-full max-w-lg">
          <div className="w-64 rounded-3xl shadow-lg glass-hover curtain-wrapper">
            <Image
              src={imgSmall}
              alt="Automation"
              className="w-full h-full object-cover"
            />

            {/* Curtain */}
            <span
              className={`curtain-overlay ${show ? "curtain-animate" : ""}`}
            />
          </div>

          <div className="absolute top-6 right-12 flex items-center gap-4">
            <h3 className="text-5xl font-bold text-orange-500">25+</h3>
            <p className="text-base text-gray-700 leading-tight">
              Year Of <br /> Experience
            </p>
          </div>

          <div className="relative -top-16 left-20 border-8 border-white rounded-[36px] shadow-xl w-3/4 glass-hover curtain-wrapper">
            <Image
              src={imgLarge}
              alt="Industrial Engineer"
              className="w-full h-full object-cover"
            />

            {/* Curtain */}
            <span
              className={`curtain-overlay ${
                show ? "curtain-animate curtain-delay" : ""
              }`}
            />
          </div>
        </div>

        {/* RIGHT SIDE – CONTENT (AOS ENABLED) */}
        <div>
          {/* ABOUT LABEL */}
          <div
            data-aos="fade-up"
            className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <p className="text-sm uppercase tracking-widest font-semibold ">
              About Us
            </p>
          </div>

          {/* TITLE */}
          <h2
            data-aos="zoom-in"
            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
          >
            Lorem, ipsum dolor. <br />
            <span className="font-bold">Lorem, ipsum.</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 max-w-xl mb-10"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* BULLETS + RATING */}
          <div className="flex items-start gap-16">
            {/* BULLETS */}
            <ul data-aos="fade-up" data-aos-delay="200" className="space-y-5">
              {[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Sed do eiusmod tempor",
                "Incididunt ut labore magna",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-800">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 text-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* RATING CARD */}
            <div
              data-aos="flip-up"
              data-aos-delay="300"
              className="bg-gray-100 rounded-[32px] px-12 py-10 text-center"
            >
              <h3 className="text-5xl font-bold text-gray-900 mb-2">4.9</h3>
              <div className="flex justify-center text-orange-500 mb-3">
                ★★★★★
              </div>
              <p className="text-sm text-gray-600">15.5K Genuine Rating</p>
            </div>
          </div>

          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay="400">
            <ButtonFill text="Learn More →" href="/" className="w-[170px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
