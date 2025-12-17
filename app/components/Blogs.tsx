"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import blog1 from "../assets/hero.png";
import blog2 from "../assets/hero.png";

export default function LatestBlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 mb-8 items-start">
          {/* LEFT */}
          <div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] "
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              <p className="text-sm uppercase tracking-widest font-semibold">
                Latest Blog
              </p>
            </div>

            <h2
              data-aos="zoom-in"
              className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
            >
              Insights from our <br />
              <span className="font-bold">latest blogs</span>
            </h2>
          </div>

          {/* RIGHT */}
          <p data-aos="fade-up" className="text-gray-500 max-w-md md:pt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            optio veritatis, molestias at nulla sint perspiciatis odio eaque sed
            velit?
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* BLOG CARD 1 */}
          <Link href="#" className="group block">
            <div className="relative overflow-hidden rounded-3xl mb-6">
              <Image
                src={blog1}
                alt="Blog 1"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* ARROW */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl bg-[var(--primary)] text-black flex items-center justify-center group-hover:scale-110 transition">
                <ArrowUpRight />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 leading-snug max-w-lg">
              Sustainable Practices Reducing Waste in Industrial Production
            </h3>
          </Link>

          {/* BLOG CARD 2 */}
          <Link href="#" className="group block">
            <div className="relative overflow-hidden rounded-3xl mb-6">
              <Image
                src={blog2}
                alt="Blog 2"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* ARROW */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl bg-[var(--primary)] text-black flex items-center justify-center group-hover:scale-110 transition">
                <ArrowUpRight />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 leading-snug max-w-lg">
              Advanced Robotics Revolutionizing Industrial Workflows
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
