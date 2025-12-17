"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import testimonialImg from "../assets/testimonial-image.jpg";

const testimonials = [
  {
    review:
      "The team’s attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
    name: "Brooklyn Simmons",
    role: "Homeowner",
    avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    rating: 5,
  },
  {
    review:
      "Professional, reliable, and highly skilled. The entire process was smooth, and the results were outstanding. I would definitely work with them again.",
    name: "Esther Howard",
    role: "Business Owner",
    avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    rating: 5,
  },
  {
    review:
      "Excellent service and great communication throughout the project. The quality of work speaks for itself.",
    name: "Jacob Jones",
    role: "Operations Manager",
    avatar: "https://cdn-icons-png.flaticon.com/128/16683/16683419.png",
    rating: 4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-white">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE (CONSTANT) */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={testimonialImg}
              alt="Client experience"
              width={700}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT (CHANGES) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm tracking-widest uppercase text-gray-500">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              Our Client Say
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold">
              What our satisfied clients <br />
              <span className="font-bold">are saying</span>
            </h2>

            {/* Stars */}
            <div className="flex gap-1 text-orange-400 text-lg">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-relaxed max-w-xl">
              “{testimonial.review}”
            </p>

            {/* CLIENT + NAVIGATION ROW */}
            <div className="flex items-center justify-between pt-6">
              {/* LEFT: Client Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>

                {/* Orange Dot (optional, like screenshot) */}
                <span className="w-2 h-2 rounded-full bg-orange-400 ml-3" />
              </div>

              {/* RIGHT: Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-xl bg-orange-400 text-white flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="w-12 h-12 rounded-xl bg-orange-400 text-white flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
