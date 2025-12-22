"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialImg from "../assets/testimonial.jpeg";
import testimonialbg from "../assets/testimonial-bg.png";
import ClientsSection from "./Clients";

const testimonials = [
  {
    review:
      "The quality and consistency of their chemical raw materials are excellent. Their products integrate seamlessly into our detergent manufacturing process and help us maintain reliable performance batch after batch.",
    name: "Amit Sharma",
    role: "Production Manager",
    avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    rating: 5,
  },
  {
    review:
      "A trusted supplier for specialty chemicals and detergent ingredients. Timely delivery, transparent communication, and dependable quality make them a long-term partner for our business.",
    name: "Priya Mehta",
    role: "Business Owner",
    avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    rating: 5,
  },
  {
    review:
      "Their chemical inputs have improved the overall consistency of our detergent formulations. The team is responsive and technically sound, which adds great value to our operations.",
    name: "Rohit Verma",
    role: "Operations Manager",
    avatar: "https://cdn-icons-png.flaticon.com/128/16683/16683419.png",
    rating: 4,
  },
  {
    review:
      "We have been sourcing chemical raw materials from them for years, and the quality has always been consistent. Their products meet our formulation requirements perfectly and help us deliver reliable detergent performance.",
    name: "Suresh Patel",
    role: "Procurement Head",
    avatar: "https://cdn-icons-png.flaticon.com/128/2922/2922510.png",
    rating: 5,
  },
];

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const testimonial = testimonials[index];

  const paginate = (dir: number) => {
    setIndex([(index + dir + testimonials.length) % testimonials.length, dir]);
  };

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
    <section ref={ref} className="relative py-12 text-white overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={testimonialbg}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative w-11/12 md:w-5/6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <div
            className="overflow-hidden rounded-3xl glass-hover curtain-wrapper 
                max-w-[400px] aspect-[2/3] mx-auto"
          >
            <Image
              src={testimonialImg}
              alt="Client experience"
              className="w-full h-full object-cover"
              priority
            />
            <span
              className={`curtain-overlay ${
                show ? "curtain-animate curtain-delay" : ""
              }`}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* FIXED TITLE (NO ANIMATION) */}
            <div className="mb-8">
              <div
                data-aos="fade-up"
                className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-3"
              >
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <p className="text-sm uppercase tracking-widest font-semibold ">
                  Our Clients Say
                </p>
              </div>

              <h2
                data-aos="zoom-in"
                className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
              >
                What our satisfied clients <br />
                <span className="font-bold">are saying</span>
              </h2>
            </div>

            {/* SLIDING CONTENT */}
            <div className="relative overflow-hidden min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 text-orange-400 text-lg mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 leading-relaxed max-w-xl mb-8">
                    “{testimonial.review}”
                  </p>

                  {/* CLIENT ROW */}
                  {/* CLIENT ROW */}
                  <div className="flex items-center justify-between max-w-xl">
                    {/* LEFT: Avatar + Name */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full"
                      />

                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-800">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT: Navigation Buttons */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => paginate(-1)}
                        className="w-12 h-12 rounded-xl bg-orange-400 hover:bg-orange-500 transition flex items-center justify-center"
                      >
                        <ChevronLeft />
                      </button>

                      <button
                        onClick={() => paginate(1)}
                        className="w-12 h-12 rounded-xl bg-orange-400 hover:bg-orange-500 transition flex items-center justify-center"
                      >
                        <ChevronRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* NAVIGATION */}
          </div>
        </div>
      </div>
      {/* <ClientsSection /> */}
    </section>
  );
}
